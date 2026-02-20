import { pool } from '@/lib/db'
import { UserData, RepositoryResponse } from '@/types/types'

export async function createUserRepository(
  data: UserData
): Promise<RepositoryResponse> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    const query1 =
      'INSERT INTO USERS (email, password, "firstName", "lastName") VALUES($1, $2, $3, $4)'
    const res = await client.query(query1, [
      data.email,
      data.password,
      data.firstName,
      data.lastName,
    ])
    await client.query('COMMIT')
    return { success: true, res: { data: { res }, error: null } }
  } catch (error) {
    await client.query('ROLLBACK')
    return {
      success: false,
      res: { data: {}, error: error },
    }
  } finally {
    client.release()
  }
}
