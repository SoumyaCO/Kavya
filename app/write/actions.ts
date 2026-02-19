import { WritingType } from "@/types/types";

export function createPost(data: PostData) {
  switch (data.writingType) {
    case 'poem':
      console.log('poem')
    case 'blog':
      console.log('blog')
    case 'article':
      console.log('article')
  }
}
