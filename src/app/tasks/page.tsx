import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Car, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Page() {

  const tasks = [
    {
      id: 1,
      title: 'Task One',
      assignedTo: 'Alice Johnson',
      priority: 'High',
      dueDate: '2024-07-10',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Task Two',
      assignedTo: 'Bob Smith',
      priority: 'Medium',
      dueDate: '2024-07-15',
      status: 'Not Started',
    },
    {
      id: 3,
      title: 'Task Three',
      assignedTo: 'Charlie Brown',
      priority: 'Low',
      dueDate: '2024-07-20',
      status: 'Completed',
    },
    {
      id: 4,
      title: 'Task Four',
      assignedTo: 'David Wilson',
      priority: 'High',
      dueDate: '2024-07-25',
      status: 'In Progress',
    },
    {
      id: 5,
      title: 'Task Five',
      assignedTo: 'Eve Davis',
      priority: 'Medium',
      dueDate: '2024-07-30',
      status: 'Not Started',
    }
  ]

  return (
    <div className="pb-10 w-full max-w-7xl">
      <div className=' flex justify-between gap-4 md:gap-0 items-center'>
        <Card className='w-full md:max-w-xs py-4 flex px-3 justify-center  items-center'>
          <CardDescription className='flex gap-2 text-xs md:text-base font-medium text-black'>List View / Grid View <Switch /></CardDescription>
        </Card>
        <Card className='w-full md:max-w-xs bg-blue-500 py-4 px-3 flex justify-center items-center'>
          <CardDescription className='flex gap-2 text-white text-xs md:text-base font-medium'><Plus /> Add New Task</CardDescription>
        </Card>
      </div>
      <div className='mt-6'>
        <Card className='w-full flex flex-col justify-center items-center overflow-x-auto'>
          <table className='w-full'>
            <thead className='w-full bg-gray-100'>
              <tr>
                <th className='p-4 text-left'>Task</th>
                <th className='p-4 text-left'>Assigned To</th>
                <th className='p-4 text-left'>Priority</th>
                <th className='p-4 text-left'>Due Date</th>
                <th className='p-4 text-left'>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                tasks.map((task) => (
                  <tr key={task.id} className='border-b hover:bg-gray-50 transition duration-150'>
                    <td className='p-4'>{task.title}</td>
                    <td className='p-4'>{task.assignedTo}</td>
                    <td className='p-4'>{task.priority}</td>
                    <td className='p-4'>{task.dueDate}</td>
                    <td className={`p-4 ${task.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>{task.status}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </Card>
      </div>
      <div className='mt-6 flex flex-col md:flex-row gap-10 w-full'>
        <Card className="p-4 w-full flex flex-col space-y-4">
          <CardTitle>Recent Tasks</CardTitle>
          <div>
            <div className="rounded-xl border p-0 w-full">
              <div className="divide-y divide-gray-100">
                <div className="flex items-center justify-between p-3 transition duration-150 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-[#FF668D]`}></div>
                    <span className="text-sm font-medium text-[#242D3C]">Design new homepage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md bg-[#FF668D] text-white`}>
                      Design
                    </span>
                    <span className="text-xs text-gray-400 min-w-[50px] text-right">
                      17 Jul
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 transition duration-150 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-[#37CD91]`}></div>
                    <span className="text-sm font-medium text-[#242D3C]">Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md bg-[#37CD91] text-white`}>
                      Work
                    </span>
                    <span className="text-xs text-gray-400 min-w-[50px] text-right">
                      10 Jul
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 transition duration-150 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-[#5C66FF]`}></div>
                    <span className="text-sm font-medium text-[#242D3C]">Update user feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-400">Design</span>
                    <span className="text-xs text-gray-400 min-w-[50px] text-right">
                      202 NIM
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 transition duration-150 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-[#8E24AA]`}></div>
                    <span className="text-sm font-medium text-[#242D3C]">Taleods</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-400 min-w-[50px] text-right">
                      202 MM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-blue-500">View All Tasks</p>
          </div>
        </Card>
        <Card className='w-full max-w-md mt-6 md:mt-0'>
          <CardTitle className='bg-[#1E2543] px-6 text-white rounded-t-lg py-3 flex justify-between items-center'>
            <span className="text-lg font-semibold">Task Detail</span>
            <button className='bg-white text-gray-800 text-sm font-medium px-4 py-1 rounded-md transition duration-150 hover:bg-gray-100'>
              Edit
            </button>
          </CardTitle>

          <div className='p-6 space-y-6'>
            <div className='flex items-center space-x-3 border-b pb-4'>
              <Image
                src="/path/to/avatar.jpg"
                alt="User Avatar"
                height={100}
                width={100}
                className="w-12 h-12 rounded-full object-cover bg-gray-200"
              />
              <div>
                <h4 className='text-lg font-semibold' style={{ color: '#242D3C' }}>
                  Tosd New Task
                </h4>
                <p className='text-xs text-gray-500'>
                  19/03/92
                </p>
              </div>
            </div>
            <div className='space-y-4'>
              <h5 className='text-base font-semibold' style={{ color: '#242D3C' }}>
                Description
              </h5>

              <div className='bg-gray-100 p-3 rounded-lg flex items-center space-x-2'>
                <div className='w-5 h-5 rounded-full flex items-center justify-center' style={{ backgroundColor: '#37CD91' }}>
                  <svg className='w-3 h-3 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className='text-sm font-medium text-gray-700'>Sub-Taun</span>
              </div>

              <div className='bg-gray-100 p-3 rounded-lg flex items-center space-x-2'>
                <div className='w-5 h-5 rounded-full flex items-center justify-center' style={{ backgroundColor: '#37CD91' }}>
                  <svg className='w-3 h-3 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className='text-sm font-medium text-gray-700'>Miign /nedhdian</span>
              </div>

              <div className='bg-gray-100 p-3 rounded-lg flex items-center space-x-2'>
                <div className='w-5 h-5 rounded-full flex items-center justify-center' style={{ backgroundColor: '#37CD91' }}>
                  <svg className='w-3 h-3 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className='text-sm font-medium text-gray-700'>Cogthal</span>
              </div>
            </div>

            <div className='pt-2'>
              <h5 className='text-base font-semibold mb-3' style={{ color: '#242D3C' }}>
                Activity Log / Comments
              </h5>

              <div className='flex items-center space-x-3'>
                <button
                  className='w-8 h-8 rounded-full flex items-center justify-center shadow-md flex-shrink-0'
                  style={{ backgroundColor: '#5C66FF' }}
                >
                  <Plus className='w-5 h-5 text-white' />
                </button>
                <input
                  type="text"
                  placeholder="New Task Title"
                  className="flex-grow p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#5C66FF] focus:border-[#5C66FF] outline-none transition duration-150"
                  style={{ color: '#242D3C' }}
                />
              </div>

            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Page