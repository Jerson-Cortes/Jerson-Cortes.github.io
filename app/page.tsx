import Hero from "./sections/hero"
import Footer from "./sections/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-white">
      <main className="flex min-h-screen w-full flex-col justify-between p-4 dark:bg-white sm:items-start">
        <Hero/>
        <Footer/>
      </main>
    </div>
  )
}
