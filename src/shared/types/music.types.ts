interface Base {
  title: string
  thumbnail: string
  author: string
  duration: number // in seconds
}

export interface Music extends Base {
  category: 'song' | 'video'
  album?: string
  year?: number
  views?: number
  likes?: number
}

