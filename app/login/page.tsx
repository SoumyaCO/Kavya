import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Decoration */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-saffron-600 to-terracotta text-white p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10" />
        <div className="relative z-10 text-center space-y-6">
          <h1 className="text-5xl font-bold font-heading">Kavya</h1>
          <p className="text-xl max-w-sm">
            &quot;Poetry is the clear expression of mixed feelings.&quot;
          </p>
          <p className="text-sm opacity-80">- W.H. Auden</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="flex flex-col justify-center items-center p-8 bg-background">
        <div className="w-full max-w-sm space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="space-y-4">
            <form
              action={async (formData) => {
                'use server'
                try {
                  await signIn('credentials', {
                    email: formData.get('email'),
                    password: formData.get('password'),
                    redirectTo: '/blog',
                  })
                } catch (error) {
                  if (error instanceof AuthError) {
                    redirect(`/login?error=${error.type}`)
                  }
                  throw error
                }
              }}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium leading-none"
                    >
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Sign In
                </Button>
              </div>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <form
                action={async () => {
                  'use server'
                  await signIn('google', { redirectTo: '/blog' })
                }}
              >
                <Button type="submit" variant="outline" className="w-full">
                  Google
                </Button>
              </form>
              <form
                action={async () => {
                  'use server'
                  await signIn('facebook', { redirectTo: '/blog' })
                }}
              >
                <Button type="submit" variant="outline" className="w-full">
                  Facebook
                </Button>
              </form>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="font-semibold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
