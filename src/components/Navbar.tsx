"use client"
import { Bell, Search, UserCircleIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams, type ReadonlyURLSearchParams } from 'next/navigation'

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false)
  const THRESHOLD = 20

  useEffect(() => {
      const handleScroll = () => {
         const y = window.scrollY
         if (y > THRESHOLD && !isScrolled) {
           setIsScrolled(true)
         } else if (y <= THRESHOLD && isScrolled) {
           setIsScrolled(false)
         }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
  }, [isScrolled])

  const pathname = usePathname() || '/'
  const searchParams = useSearchParams()

  const getTitleFromPath = (path: string, params: ReadonlyURLSearchParams | null) => {
    const override = params?.get('title')
    if (override) return override

    switch (path) {
      case '/':
        return 'Dashboard'
      case '/profile':
        return 'Profile'
      case '/tasks':
        return 'Tasks'
      case '/analytics':
        return 'Analytics'
      case '/settings':
        return 'Settings'
      default:
        const parts = path.split('/').filter(Boolean)
        return parts.length ? parts.join(' / ') : 'Dashboard'
    }
  }

  const title = getTitleFromPath(pathname, searchParams)


  return (
    <div className={`px-10 py-6 fixed left-64 right-0 z-50 ${isScrolled ? 'shadow-md bg-white/70 backdrop-blur-sm' : ''}`}>
        <div className='w-full max-w-[1200px] flex justify-center item-center'>
            <div className='w-full flex justify-between items-center'>
           <h1 className='text-black font-bold text-xl md:text-2xl'>{title}</h1>
           <div className='bg-gray-100 rounded-lg p-2 items-center ml-10 w-full max-w-sm hidden md:flex'>
              <Search className='inline mr-3'/>
              <input type="text" placeholder='Search...' className='outline-none bg-transparent'/>
           </div>
           <div className='flex gap-2 items-center'>
              <Bell className='text-black'/>
              <UserCircleIcon className='text-black w-8 h-8'/>  
           </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar