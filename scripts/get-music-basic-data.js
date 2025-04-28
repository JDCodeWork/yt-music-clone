Array.from(document.querySelectorAll('ytmusic-responsive-list-item-renderer.ytmusic-carousel')).map(el => {
  const image = el.querySelector('img').src
  const name = el.querySelector('a.yt-simple-endpoint.style-scope.yt-formatted-string').innerText

  const meta = el.querySelectorAll('yt-formatted-string')[1].innerText.replace(/\n/g, '').split("•")
  const artist = meta[0].trim()
  const views = meta[1].trim()

  return {
    image,
    name,
    artist,
    views
  }
})