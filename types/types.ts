export type WritingType = "blog" | "poem" | "article"

export type PostData = {
  writingType: WritingType
}

export type UserData = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export type RepositoryResponse = {
  success: boolean,
  res: Object,
}

