import Hero from "./sections/hero"
import Footer from "./sections/footer"
import AboutMe from "./sections/about_me"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-white">
      <main className="flex min-h-screen w-full flex-col justify-between p-5 dark:bg-white sm:items-start">
        <Hero/>
        <AboutMe/>
        <Footer/>
      </main>
    </div>
  )
}
