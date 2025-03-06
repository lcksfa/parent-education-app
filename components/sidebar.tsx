"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, MessageSquare, User, Menu } from "lucide-react"

const navItems = [
  { icon: Home, label: "首页", href: "/" },
  { icon: MessageSquare, label: "留言板", href: "/message-board" },
  { icon: User, label: "我的", href: "/profile" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()

  return (
    <>
      <button className="fixed top-4 left-4 z-50 lg:hidden text-[#6D8B9C] bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 active:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 w-64`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b">
            <h1 className="text-xl font-bold text-[#6D8B9C]">家长教育平台</h1>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${pathname === item.href ? "bg-gray-100 text-[#6D8B9C]" : ""}`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span className={`${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? "ml-64" : "ml-0"}`}>
        {/* 右边的内容 */}
        <div className="p-4">
          {/* 在这里添加右边的内容 */}
        </div>
      </div>
    </>
  )
}

