interface Props {
  artists: string[]
}
export const ArtistsLinks = ({ artists }: Props) => {
  return (
    <span className="inline-block max-w-[80%] items-center overflow-hidden whitespace-nowrap text-ellipsis ">•{" "}
      {artists.map((artist, idx) => {
        const isLast = idx === artists.length - 1
        const isSecondToLast = idx === artists.length - 2

        return (
          <span key={artist}>
            {artists.length === 2 ? " " : ""}
            {isLast && artists.length > 1 ? "y " : ""}
            <span className="hover:underline cursor-pointer">
              {artist}
            </span>
            {!isLast && (artist.length === 2 || !isSecondToLast) ? ", " : ""}
          </span>
        )
      })}
    </span>
  )
}