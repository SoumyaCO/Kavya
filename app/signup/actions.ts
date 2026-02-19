'use server';

import { hashPassword } from "@/lib/password";
import { createUserRepository } from "@/repository/users.repository";
import { UserData } from "@/types/types";

export async function credentialLogin(data: UserData) {
  try {
    let hashPass = await hashPassword(data.password)
    let result = await createUserRepository({ email: data.email, password: hashPass })
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
