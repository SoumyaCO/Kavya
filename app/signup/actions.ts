'use server'

import { hashPassword } from '@/lib/password'
import { createUserRepository } from '@/repository/users.repository'
import { UserData } from '@/types/types'
import { redirect } from 'next/navigation'

export async function credentialSignUp(data: UserData) {
  try {
    const hashPass = await hashPassword(data.password)
    const result = await createUserRepository({
      email: data.email,
      password: hashPass,
      firstName: data.firstName,
      lastName: data.lastName,
    })
    if (result.success) {
      redirect('/blog')
    }
    console.log(result)
  } catch (error) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error
    }
    console.error(error)
  }
}
