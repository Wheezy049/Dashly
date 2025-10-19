import { HorizontalBarChart } from '@/components/HorizontalBarChart'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { VerticalBarChart } from '@/components/VerticalBarChart'
import { User, Plus, ChevronUp, Clock } from 'lucide-react'
import React from 'react'

function Page() {

  const tableData = [
    {
      category: 'Design',
      completionRate: '88%',
      tosltDoe: '4.1',
      avgTime: '3.0h',
      totalTasks: 250,
    },
    {
      category: 'Personal',
      completionRate: '95%',
      tosltDoe: '75%',
      avgTime: '2.5h',
      totalTasks: 80,
    },
  ];

  const darkTextColor = '#242D3C';

  return (
    <div className="pb-10 w-full max-w-7xl">
      <div className='flex justify-between w-full items-center'>
        <Card className='p-3'>
          <CardTitle className='flex gap-2 items-center text-black text-base'> <User /> 90 Days Project</CardTitle>
        </Card>
        <Card className='w-full md:max-w-xs bg-blue-500 py-4 px-3 flex justify-center items-center'>
          <CardDescription className='flex gap-2 text-white text-xs md:text-base font-medium'><Plus /> Export Report (PDF/CSV)</CardDescription>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center w-full mt-5">
        <Card className="w-full bg-green-50/50 flex flex-col gap-2 items-center justify-center p-3">
          <CardTitle className="text-black text-center">Completion Rate</CardTitle>
          <CardDescription className="text-center flex gap-2 font-bold items-end text-3xl text-black">92% <ChevronUp className='w-6 h-6 text-green-500' /></CardDescription>
          <span className=''>vs last period</span>
        </Card>
        <Card className="w-full bg-green-50/50 flex flex-col gap-2 items-center justify-center p-3">
          <CardTitle className="text-black text-center">Avg. Time to Complete</CardTitle>
          <CardDescription className="text-center flex gap-2 font-bold items-end text-3xl text-black">3.5 Hours<Clock className='w-4 h-4 text-blue-500' /></CardDescription>
          <span className=''>1.5 hours</span>
        </Card>
        <Card className="w-full flex flex-col gap-2 items-center justify-center p-3">
          <CardTitle className="text-black text-center">Task Completed</CardTitle>
          <CardDescription className="text-center font-bold text-3xl text-black">480</CardDescription>
          <span className='text-gray-500 text-sm'>this period</span>
        </Card>
        <Card className="w-full flex flex-col gap-2 items-center justify-center p-3">
          <CardTitle className="text-black text-center">Task Completed</CardTitle>
          <CardDescription className="text-center font-bold text-3xl text-black">510</CardDescription>
          <span className=''>this period</span>
        </Card>
      </div>
      <div className='w-full flex flex-col md:flex-row gap-10 mt-6'>
        <Card className="p-4 w-full flex flex-col space-y-4">
          <CardTitle className='flex justify-between items-center w-full'>
            Completion Trends
            <div className='flex gap-2 items-center'>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full p-1 bg-green-500"></span>
                <p className="text-sm">Completed</p>
              </div>
              <Switch />
            </div>
          </CardTitle>
          <CardDescription className="flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full p-1 bg-blue-500"></span>
            <p className="text-sm">Task Completed</p>
          </CardDescription>
          <VerticalBarChart />
        </Card>
        <Card className="p-4 w-full flex flex-col space-y-4">
          <CardTitle>Workload Distribution</CardTitle>
          <CardDescription className="flex gap-3 items-center flex-wrap">
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full p-1 bg-blue-500"></span>
              <p className="text-sm">Jone Doe</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-3 h-3 rounded-full p-1 bg-green-500"></span>
              <p className="text-sm">Jane Progress</p>
            </div>
          </CardDescription>
          <HorizontalBarChart />
        </Card>
      </div>
      <div className='w-full mt-6'>
        <Card className='w-full p-6 flex flex-col gap-3'>
          <CardTitle>Metrics by Category</CardTitle>
          <div className="w-full border rounded-xl overflow-x-auto">
            <div
              className="hidden sm:flex bg-gray-50 text-sm font-semibold py-4 px-6 border-b border-gray-200"
              style={{ color: darkTextColor }}
            >
              <div className="w-1/4">Category</div>
              <div className="w-1/4">Completion Rate</div>
              <div className="w-1/6">Toslt Doe</div>
              <div className="w-1/6">Avg Time (H)</div>
              <div className="w-1/6 text-right pr-6">Total Tasks</div>
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center text-sm py-4 px-4 sm:px-6 gap-2 sm:gap-0"
                >
                  <div className="sm:w-1/4 font-medium">
                    <span className="sm:hidden text-xs text-gray-500 block">Category</span>
                    {row.category}
                  </div>

                  <div className="sm:w-1/4 text-gray-700">
                    <span className="sm:hidden text-xs text-gray-500 block">Completion Rate</span>
                    {row.completionRate}
                  </div>

                  <div className="sm:w-1/6 text-gray-700">
                    <span className="sm:hidden text-xs text-gray-500 block">Toslt Doe</span>
                    {row.tosltDoe}
                  </div>

                  <div className="sm:w-1/6 text-gray-700">
                    <span className="sm:hidden text-xs text-gray-500 block">Avg Time (H)</span>
                    {row.avgTime}
                  </div>

                  <div className="sm:w-1/6 text-right sm:pr-6 text-gray-700">
                    <span className="sm:hidden text-xs text-gray-500 block">Total Tasks</span>
                    {row.totalTasks}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Page