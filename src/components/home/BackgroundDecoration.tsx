export const BackgroundDecoration = () => {
  return (
    <div id="background-decoration" className="absolute inset-x-0 h-80 opacity-75">
      <div className="absolute inset-0  scale-x-125 scale-y-150 bg-linear-to-r/oklch from-blue-400 from-10% via-yellow-400 via-40% to-red-400 to-90% blur-lg opacity-15">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 from-25% to-transparent"></div>
      </div>
      <div className="absolute w-96 h-64 bg-gradient-to-b -translate-y-[150px] translate-x-[100px] from-transparent to-cyan-600 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute w-80 h-52 bg-gradient-to-t translate-y-[50px] translate-x-[600px] from-transparent to-yellow-500 rounded-full blur-3xl opacity-15"></div>
      <div className="absolute w-96 h-64 bg-gradient-to-b -translate-y-[200px] -right-32 from-transparent to-red-600 rounded-full blur-3xl opacity-15"></div>
    </div>
  )
}