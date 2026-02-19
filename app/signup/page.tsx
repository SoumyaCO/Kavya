'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { testDBConnection } from "./actions"

export default function SignupPage() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Decoration - Matching Login Page */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-saffron-600 to-terracotta text-white p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10" />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-5xl font-bold font-heading">Join Kavya</h1>
          <p className="text-xl max-w-sm">Start your journey into the world of words today.</p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-background">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Create an account</h2>
            <p className="text-muted-foreground mt-2">Enter your details to get started</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">First name</label>
                <Input placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Last name</label>
                <Input placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Email</label>
              <Input placeholder="name@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">Password</label>
              <Input type="password" />
            </div>

            <Button
              onClick={() => testDBConnection()}
              className="w-full bg-primary hover:bg-primary/90">Sign Up</Button>

            {/* Social Login Buttons - Added */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Google</Button>
              <Button variant="outline">Facebook</Button>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
