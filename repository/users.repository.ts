import { pgclient } from "@/lib/db";
import { UserData, RepositoryResponse } from "@/types/types";


export async function createUserRepository(data: UserData): Promise<RepositoryResponse> {
  try {
    let result = await pgclient
      .query('INSERT INTO USERS (first_name, last_name, email, password) VALUES($1, $2, $3, $4)',
        [data.firstName, data.lastName, data.email, data.password]
      )
    return { success: true,  res: {data: {}, error:""}
  }catch(error) {
    return { success: true,  res: {data:{}, error: error }
  }
}

