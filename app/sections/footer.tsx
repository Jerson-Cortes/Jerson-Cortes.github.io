export default function Footer() {
  return (
    <footer className="flex fixed inset-x-0 bottom-0 p-5 bg-white">
      <p className="text-lg bg-(--red) font-bold text-white">MEXICO</p>
      <div className="ml-auto space-x-3 text-lg font-bold">
        <a href="https://github.com/Jerson-Cortes" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/jerson-cortes-palomino" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:JersonCortes.work@proton.me?subject=Feedback%20From%20Github&body=Hello," target="_blank" rel="noopener noreferrer">Email</a>
      </div>
    </footer>
  )
}
