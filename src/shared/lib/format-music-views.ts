export const formatMusicViews = (views: number): string => {
  if (views >= 1000000) return `${views.toString().slice(0, -6)} M`

  if (views >= 1000) return `${views.toString().slice(0, -3)} K`

  return ''
}