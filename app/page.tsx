import { Camera, ChevronDown, Clock, Plus } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="h-screen p-6 flex flex-col">
      {/* 顶部照片墙 */}
      <div className="relative h-[40vh] overflow-hidden rounded-xl mb-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="snap-center shrink-0 w-full h-[40vh] relative">
              <Image
                src={`/placeholder.svg?height=400&width=300&text=照片${item}`}
                alt={`精选照片 ${item}`}
                className="object-cover w-full h-full"
                width={300}
                height={400}
              />
              <div className="absolute bottom-4 left-4 bg-[#6D8B9C]/80 text-white px-3 py-1 rounded-full text-sm">
                {item % 2 === 0 ? "课堂瞬间" : "活动记录"}
              </div>
            </div>
          ))}
        </div>

        {/* 上传按钮 (仅家委会可见) */}
        <button className="absolute bottom-6 right-6 bg-[#6D8B9C] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* 中部信息区 */}
      <div className="flex-1 flex gap-6">
        {/* 左侧作业卡片 */}
        <div className="w-1/2 bg-white rounded-xl shadow-md p-4 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-medium text-[#6D8B9C]">今日作业</h2>
            <div className="relative w-8 h-8">
              <svg className="w-8 h-8" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f0f0f0" strokeWidth="4"></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="4"
                  strokeDasharray="100"
                  strokeDashoffset="25"
                  strokeLinecap="round"
                ></circle>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs">75%</span>
            </div>
          </div>

          <div className="border border-[#E9D5B4] rounded-lg p-3 mb-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">语文作业</p>
              <p className="text-xs text-gray-500">课本P.32 练习1-3</p>
            </div>
            <ChevronDown className="w-5 h-5 text-[#6D8B9C]" />
          </div>

          <div className="border border-[#E9D5B4] rounded-lg p-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">数学作业</p>
              <p className="text-xs text-gray-500">课本P.45 例题5-8</p>
            </div>
            <ChevronDown className="w-5 h-5 text-[#6D8B9C]" />
          </div>

          <button className="mt-auto bg-[#E9D5B4] text-[#6D8B9C] rounded-full py-2 flex items-center justify-center gap-2 font-medium">
            <Camera className="w-5 h-5" />
            <span>提交作业</span>
          </button>
        </div>

        {/* 右侧课程卡片 */}
        <div className="w-1/2 bg-white rounded-xl shadow-md p-4 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-medium text-[#6D8B9C]">今日课程</h2>
            <Clock className="w-5 h-5 text-[#6D8B9C]" />
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="relative pl-6 border-l border-dashed border-[#6D8B9C]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#6D8B9C] -translate-x-1.5"></div>
              <div className="mb-4">
                <p className="text-xs text-gray-500">08:00 - 08:45</p>
                <p className="text-sm font-medium">语文</p>
              </div>
            </div>

            <div className="relative pl-6 border-l border-dashed border-[#6D8B9C]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#6D8B9C] -translate-x-1.5"></div>
              <div className="mb-4">
                <p className="text-xs text-gray-500">08:55 - 09:40</p>
                <p className="text-sm font-medium">数学</p>
              </div>
            </div>

            <div className="relative pl-6 border-l border-dashed border-[#6D8B9C]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#FF5252] -translate-x-1.5 animate-pulse"></div>
              <div className="mb-4 border border-[#FF5252] border-opacity-50 rounded-lg p-2 animate-pulse-border">
                <p className="text-xs text-gray-500">10:00 - 10:45</p>
                <p className="text-sm font-medium">英语 (调课)</p>
              </div>
            </div>

            <div className="relative pl-6 border-l border-dashed border-[#6D8B9C]">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-[#6D8B9C] -translate-x-1.5"></div>
              <div className="mb-4">
                <p className="text-xs text-gray-500">11:00 - 11:45</p>
                <p className="text-sm font-medium">科学</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

