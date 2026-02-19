import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "pg"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import { comparePassword } from "@/lib/password" // your own bcrypt helper

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    Google,
    Facebook,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null

        const result = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [credentials.email]
        )
        const user = result.rows[0]

        if (!user) throw new Error("No user found")

        const isValid = await comparePassword(
          credentials.password as string,
          user.password
        )

        if (!isValid) throw new Error("Invalid password")

        return user
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt", // required when using Credentials alongside OAuth
  },
})
