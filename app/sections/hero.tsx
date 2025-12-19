export default function Hero() {
  return (
    <section id="Hero" className="w-full md:h-[calc(100vh-6rem)]">
      <div id="Hero" className="flex flex-col w-full">
        <div className="flex md:justify-center">
          <h1 className="text-(--red) text-7xl">JERSON</h1>
          <h1 className="text-(--red) text-7xl absolute top-25 right-4 md:static md:top-0 md:right-0 md:ml-5">CORTES</h1>
        </div>
        <h3 className="text-lg absolute top-41 right-11 md:static md:top-0 md:right-0 md:text-center">SOFTWARE DEVELOPER</h3>
        <h3 className="text-4xl japanese writing-vertical-lr p-4 md:absolute md:top-35 md:pl-15 md:text-5xl">努力は裏切らない</h3>
        <div className="flex flex-col pt-12 right-5 ml-auto space-y-8 text-4xl font-bold md:pt-30 2xl:pr-10">
          <a className="ml-auto hover:text-(--red)" href="#AboutMe">[ABOUT ME]</a>
          <a className="ml-auto hover:text-(--red)" href="#Skills">[SKILLS]</a>
          <a className="ml-auto hover:text-(--red)" href="#Contact">[CONTACT]</a>
        </div>
      </div>
    </section>
  )
}
