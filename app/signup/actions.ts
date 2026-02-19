'use server';
import { createUserRepository } from "@/repository/users.repository";

import { UserData } from "@/types/types";
import { redirect } from "next/navigation";

export async function signup(data: UserData) {
  try {
    let result = await createUserRepository(data)
    if (result.status){
      redirect("/login")
    }
  } catch (error) {
  }
}
