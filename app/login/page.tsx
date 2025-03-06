"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Lock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
    
    // 清除错误提示
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { username: "", password: "" }

    if (!formData.username.trim()) {
      newErrors.username = "请输入用户名"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "请输入密码"
      valid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "密码长度不能少于6位"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // 模拟登录请求
    try {
      // 这里应该是实际的登录API调用
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 登录成功后跳转到首页
      router.push("/")
    } catch (error) {
      console.error("登录失败", error)
      // 处理登录失败情况
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center text-[#6D8B9C]">家长教育平台</CardTitle>
          <CardDescription className="text-center">请登录您的账号</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  name="username"
                  placeholder="用户名"
                  className="pl-10"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="密码"
                  className="pl-10"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-[#6D8B9C] focus:ring-[#6D8B9C]"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                记住我
              </label>
              <div className="flex-1 text-right">
                <Link href="#" className="text-sm text-[#6D8B9C] hover:underline">
                  忘记密码？
                </Link>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-[#6D8B9C] hover:bg-[#5d7a89]"
              disabled={isLoading}
            >
              {isLoading ? "登录中..." : "登录"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            还没有账号？
            <Link href="#" className="text-[#6D8B9C] hover:underline ml-1">
              立即注册
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}