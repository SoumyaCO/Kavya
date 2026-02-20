import NextAuth from 'next-auth'
import PostgresAdapter from '@auth/pg-adapter'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import { comparePassword } from '@/lib/password' // your own bcrypt helper
import { pool } from './lib/db'
import { authConfig } from './auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PostgresAdapter(pool),
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.firstName = user.firstName
        token.lastName = user.lastName
      }
      return token
    },
    session({ session, token }) {
      session.user.firstName = token.firstName as string
      session.user.lastName = token.lastName as string
      return session
    },
  },
  providers: [
    Google,
    Facebook,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null
        const result = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [credentials.email]
        )
        const user = result.rows[0]
        if (!user) throw new Error('No user found')
        const isValid = await comparePassword(
          credentials.password as string,
          user.password
        )
        if (!isValid) throw new Error('Invalid password')
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt', // required when using Credentials alongside OAuth
  },
})
