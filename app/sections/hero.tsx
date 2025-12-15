export default function Hero() {
  return (
    <div id="Hero" className="flex flex-col">
      <h1 className="text-(--red) text-7xl order-0">JERSON</h1>
      <h1 className="text-(--red) text-7xl order-2 absolute top-25 right-4">CORTES</h1>
      <h3 className="text-4xl order-1 writing-vertical-lr py-4 px-4 japanese">努力は裏切らない</h3>
      <h3 className="text-lg order-3 absolute top-41 right-11">SOFTWARE DEVELOPER</h3>
      <div className="flex flex-col order-4 py-12 right-5 ml-auto space-y-8 font-bold">
        <a className="text-4xl ml-auto hover:text-(--red)" href="/">[ABOUT ME]</a>
        <a className="text-4xl ml-auto hover:text-(--red)" href="/">[SKILLS]</a>
        <a className="text-4xl ml-auto hover:text-(--red)" href="/">[CONTACT]</a>
      </div>
    </div>
  )
}
