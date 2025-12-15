export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-white">
      <main className="flex min-h-screen w-full flex-col justify-between p-4 dark:bg-white sm:items-start">
        <div className="flex flex-col">
          <h1 className="text-(--red) text-7xl order-0">JERSON</h1>
          <h1 className="text-(--red) text-7xl order-2 absolute top-25 right-4">CORTES</h1>
          <h3 className="text-4xl order-1 writing-vertical-lr py-4 px-4 japanese">努力は裏切らない</h3>
          <h3 className="text-lg order-3 absolute top-41 right-11">SOFTWARE DEVELOPER</h3>
          <div className="flex flex-col order-4 py-12 right-5 ml-auto space-y-8">
            <h2 className="text-4xl ml-auto">[ABOUT ME]</h2>
            <h2 className="text-4xl ml-auto">[SKILLS]</h2>
            <h2 className="text-4xl ml-auto">[CONTACT]</h2>
          </div>
        </div>
        <footer className="flex fixed inset-x-0 bottom-0 p-5">
            <p className="text-lg bg-(--red)">MEXICO</p>
          <div className="ml-auto space-x-3 text-lg">
            <a href="https://github.com/Jerson-Cortes" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/jerson-cortes-palomino" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:JersonCortes.work@proton.me?subject=Feedback%20From%20Github&body=Hello," target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
