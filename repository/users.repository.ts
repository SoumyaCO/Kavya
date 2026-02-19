import { pgclient } from "@/lib/db";
import { RepositoryResponse } from "@/types/types";


export async function createUserRepository(data: { email: string, password: string }): Promise<RepositoryResponse> {
  try {
    let result = await pgclient
      .query('INSERT INTO USERS (email, password) VALUES($1, $2)',
        [data.email, data.password]
      )
    return { success: true, res: { data: result, error: "" } }
  } catch (error) {
    return {
      success: true, res: { data: {}, error: error }
    }
  }
}

