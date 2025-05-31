interface Base {
  title: string
  thumbnail: string
  author: string
  duration: number // in seconds
}

interface Song extends Base {
  category: 'song'
  album: string
  year: number
}

interface Video extends Base {
  category: 'video'
  views: number
  likes: number
}

export type Music = Song | Video
