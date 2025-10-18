"use client"
import { Home, Settings, UserCircle2Icon, ListTodo, BarChart3 } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Sidebar() {

        const pathname = usePathname() || '/'

    const isActive = (path: string) =>
      path === '/' ? pathname === '/' : pathname.startsWith(path)

    return (
        <nav
          aria-label="Sidebar"
          className="bg-[#1E2543] w-20 md:w-64 h-full p-3 md:p-6 fixed left-0 top-0 overflow-y-auto transition-[width] duration-200 ease-in-out z-40"
        >
            <div className="flex items-center gap-3 mb-6">
              {/* small collapsed logo / full title on md+ */}
              <div className="flex items-center justify-center w-8 h-8 rounded bg-white/10 text-white">
                <span className="text-sm font-bold md:hidden">D</span>
                <Home size={18} className="hidden md:block" />
              </div>
              <h1 className="text-white text-xl md:text-3xl font-bold hidden md:block">Dashly</h1>
            </div>

            <ul className="flex flex-col justify-start items-start mt-4 space-y-4 w-full">
                <Link href='/' className={`w-full text-white px-2 md:px-3 py-2 hover:bg-[#2A2D4D] rounded flex items-center gap-3 ${isActive('/') ? 'bg-[#2A2D4D]' : ''}`}>
                    <Home size={18} />
                    <span className="hidden md:block">Home</span>
                </Link>
                <Link href='/tasks' className={`w-full text-white px-2 md:px-3 py-2 hover:bg-[#2A2D4D] rounded flex items-center gap-3 ${isActive('/tasks') ? 'bg-[#2A2D4D]' : ''}`}>
                    <ListTodo size={18} />
                    <span className="hidden md:block">Tasks</span>
                </Link>
                <Link href='/analytics' className={`w-full text-white px-2 md:px-3 py-2 hover:bg-[#2A2D4D] rounded flex items-center gap-3 ${isActive('/analytics') ? 'bg-[#2A2D4D]' : ''}`}>
                    <BarChart3 size={18} />
                    <span className="hidden md:block">Analytics</span>
                </Link>
                <Link href='/profile' className={`w-full text-white px-2 md:px-3 py-2 hover:bg-[#2A2D4D] rounded flex items-center gap-3 ${isActive('/profile') ? 'bg-[#2A2D4D]' : ''}`}>
                    <UserCircle2Icon size={18} />
                    <span className="hidden md:block">Profile</span>
                </Link>
                <Link href='/settings' className={`w-full text-white px-2 md:px-3 py-2 hover:bg-[#2A2D4D] rounded flex items-center gap-3 ${isActive('/settings') ? 'bg-[#2A2D4D]' : ''}`}>
                    <Settings size={18} />
                    <span className="hidden md:block">Settings</span>
                </Link>
            </ul>
        </nav>
    )
}

export default Sidebar