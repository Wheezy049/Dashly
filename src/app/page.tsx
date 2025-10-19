import { CategoriesBarChart } from "@/components/CategoryBarChart";
import { TaskTrendsLineChart } from "@/components/LineChart";
import { ProductivityChart } from "@/components/ProductivityChart";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Home() {

  return (
    <div className="pb-10 w-full max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center w-full">
        <Card className="w-full bg-[#EAEFF5] flex flex-col items-center space-y-2 justify-center p-6">
          <CardTitle className="text-center text-black">Total Tasks</CardTitle>
          <CardDescription className="text-center font-semibold text-2xl text-black">1,743</CardDescription>
        </Card>
        <Card className="w-full bg-[#37CD91] flex flex-col items-center space-y-2 justify-center p-6">
          <CardTitle className="text-center text-white">Completed Tasks</CardTitle>
          <CardDescription className="text-center font-semibold text-2xl text-white">1,249</CardDescription>
        </Card>
        <Card className="w-full bg-[#FF668D] flex flex-col items-center space-y-2 justify-center p-6">
          <CardTitle className="text-center text-white">Pending Tasks</CardTitle>
          <CardDescription className="text-center font-semibold text-2xl text-white">534</CardDescription>
        </Card>
        <Card className="w-full bg-[#FB8C00] flex flex-col items-center space-y-2 justify-center p-6">
          <CardTitle className="text-center text-white">Overdue Tasks</CardTitle>
          <CardDescription className="text-center font-semibold text-2xl text-white">78</CardDescription>
        </Card>
      </div>

      <div className="mt-6">
        <div className="inline-flex flex-wrap gap-2">
          <ButtonGroup>
            <Button variant="outline" size="lg">7 days</Button>
            <Button variant="outline" size="lg">30 days</Button>
            <Button variant="outline" size="lg">Quarter</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 items-start mt-6">
        <div className="flex flex-col space-y-4 w-full md:flex-1">
          <Card className="p-4 w-full flex flex-col space-y-4">
            <CardTitle>Task Trends</CardTitle>
            <CardDescription className="flex gap-3 items-center flex-wrap">
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full p-1 bg-blue-500"></span>
                <p className="text-sm">Created</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full p-1 bg-green-500"></span>
                <p className="text-sm">Completed</p>
              </div>
            </CardDescription>
            <TaskTrendsLineChart />
          </Card>

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
        </div>

        <div className="flex flex-col space-y-4 w-full md:w-[350px]">
          <Card className="p-4 w-full flex flex-col space-y-2">
            <CardTitle>Categories</CardTitle>
            <CardContent className="flex justify-center items-center">
              <CategoriesBarChart />
            </CardContent>
          </Card>

          <Card className="p-4 w-full flex flex-col space-y-2">
            <CardTitle>Productivity Score</CardTitle>
            <div className="flex justify-center items-center">
              <ProductivityChart score={90} />
            </div>
          </Card>

          <Card className="p-4 w-full flex flex-col space-y-4">
            <CardTitle>Quick Add Task</CardTitle>
            <CardContent className="flex gap-3 items-center">
              <span className="w-8 h-8 rounded-full p-2 flex justify-center items-center bg-blue-500">
                <Plus size={16} color="white" />
              </span>
              <input type="text" placeholder="Task Name" className="flex-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}