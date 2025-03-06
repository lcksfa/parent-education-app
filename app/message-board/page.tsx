"use client"

import { useState } from "react"
import { ThumbsUp, MessageSquare, Edit } from "lucide-react"
import Image from "next/image"

export default function MessageBoardPage() {
  const [likes, setLikes] = useState({ post1: 12, post2: 24 })
  const [showAllReplies, setShowAllReplies] = useState({ post1: false, post2: false })
  const [showReplyInput, setShowReplyInput] = useState({ post1: false, post2: false })

  const handleLike = (postId: string) => {
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId] + 1
    }))
  }

  const toggleReplies = (postId: string) => {
    setShowAllReplies(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
  }

  const toggleReplyInput = (postId: string) => {
    setShowReplyInput(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#6D8B9C] mb-6">家长留言板</h1>

      {/* 话题分类栏 */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-6">
        <button className="bg-[#6D8B9C] text-white px-4 py-1.5 rounded-full text-sm whitespace-nowrap">全部</button>
        <button className="bg-[#F8F7F4] text-[#6D8B9C] px-4 py-1.5 rounded-full text-sm whitespace-nowrap hover:bg-[#6D8B9C] hover:text-white transition-colors">#作业答疑</button>
        <button className="bg-[#F8F7F4] text-[#6D8B9C] px-4 py-1.5 rounded-full text-sm whitespace-nowrap hover:bg-[#6D8B9C] hover:text-white transition-colors">#活动召集</button>
        <button className="bg-[#F8F7F4] text-[#6D8B9C] px-4 py-1.5 rounded-full text-sm whitespace-nowrap hover:bg-[#6D8B9C] hover:text-white transition-colors">#校园通知</button>
      </div>

      {/* 留言列表 */}
      <div className="space-y-6">
        {/* 留言卡片1 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=40&width=40&text=🐱"
                alt="家长头像"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">小明妈妈</h3>
                <span className="text-xs text-gray-400">今天 14:30</span>
              </div>
              <div className="mt-1 text-sm">
                <span className="text-[#6D8B9C] bg-[#6D8B9C]/10 px-1.5 py-0.5 rounded mr-1 text-xs">#作业答疑</span>
                语文作业第三题应该怎么做？课本上没有类似的例题，孩子不太理解。
              </div>
            </div>
          </div>

          {/* 快捷回复按钮 */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button 
                onClick={() => handleLike('post1')} 
                className="flex items-center gap-1 text-gray-500 text-sm hover:text-[#6D8B9C] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>{likes.post1}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>8</span>
              </button>
            </div>
            <button 
              onClick={() => toggleReplyInput('post1')}
              className="flex items-center gap-1 text-[#6D8B9C] text-sm hover:text-[#6D8B9C]/80 transition-colors">
              <Edit className="w-4 h-4" />
              <span>回复</span>
            </button>
          </div>

          {/* 最新回复折叠层 */}
          <div className="mt-3 bg-[#F8F7F4] rounded-lg p-3">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=🐶"
                  alt="回复头像"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-xs font-medium">王老师</h4>
                  <span className="text-xs text-gray-400">14:45</span>
                </div>
                <p className="text-xs mt-0.5">这道题需要用到我们昨天讲的修辞手法，请看课本P.30的例题。</p>
              </div>
            </div>

            {showAllReplies.post1 && (
              <div className="flex items-start gap-2 mb-2">
                <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=24&width=24&text=🐰"
                    alt="回复头像"
                    width={24}
                    height={24}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="text-xs font-medium">小红妈妈</h4>
                    <span className="text-xs text-gray-400">15:10</span>
                  </div>
                  <p className="text-xs mt-0.5">我们家孩子也不会，谢谢王老师的解答！</p>
                </div>
              </div>
            )}

            <button 
              onClick={() => toggleReplies('post1')}
              className="w-full text-center text-xs text-[#6D8B9C] mt-2 hover:text-[#6D8B9C]/80 transition-colors">
              {showAllReplies.post1 ? '收起回复' : '查看全部8条回复'}
            </button>
          </div>
        </div>

        {/* 留言卡片2 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=40&width=40&text=🦊"
                alt="家长头像"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">班主任</h3>
                <span className="text-xs text-gray-400">今天 10:15</span>
              </div>
              <div className="mt-1 text-sm">
                <span className="text-[#6D8B9C] bg-[#6D8B9C]/10 px-1.5 py-0.5 rounded mr-1 text-xs">#活动召集</span>
                下周五将举行春游活动，请各位家长在周三前完成报名并缴费，谢谢配合！
              </div>
            </div>
          </div>

          {/* 快捷回复按钮 */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button 
                onClick={() => handleLike('post2')}
                className="flex items-center gap-1 text-gray-500 text-sm hover:text-[#6D8B9C] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>{likes.post2}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>15</span>
              </button>
            </div>
            <button 
              onClick={() => toggleReplyInput('post1')}
              className="flex items-center gap-1 text-[#6D8B9C] text-sm hover:text-[#6D8B9C]/80 transition-colors">
              <Edit className="w-4 h-4" />
              <span>回复</span>
            </button>
          </div>

          {/* 最新回复折叠层 */}
          <div className="mt-3 bg-[#F8F7F4] rounded-lg p-3">
            <div className="flex items-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=🐻"
                  alt="回复头像"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-xs font-medium">小华爸爸</h4>
                  <span className="text-xs text-gray-400">10:30</span>
                </div>
                <p className="text-xs mt-0.5">请问费用是多少？需要准备什么？</p>
              </div>
            </div>

            <div className="flex items-start gap-2 mb-2">
              <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=24&width=24&text=🦊"
                  alt="回复头像"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="text-xs font-medium">班主任</h4>
                  <span className="text-xs text-gray-400">10:45</span>
                </div>
                <p className="text-xs mt-0.5">
                  费用120元/人，包含往返车费、门票和午餐。请准备水壶、零食、雨具和换洗衣物。
                </p>
              </div>
            </div>

            <button className="w-full text-center text-xs text-[#6D8B9C] mt-2">查看全部15条回复</button>
          </div>
        </div>
      </div>

      {/* 悬浮发布按钮 */}
      <button className="fixed bottom-6 right-6 bg-[#6D8B9C] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
        <Edit className="w-6 h-6" />
      </button>
    </div>
  )
}

