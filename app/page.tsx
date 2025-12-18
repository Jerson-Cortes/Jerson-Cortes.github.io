import Hero from "./sections/hero"
import Footer from "./sections/footer"
import AboutMe from "./sections/about_me"
import Skills from "./sections/skills"
import Contact from "./sections/contact"
import NavBar from "./components/navbar"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-white">
      <NavBar />
      <main className="flex min-h-screen w-full flex-col justify-between p-5 dark:bg-white sm:items-start">
        <Hero />
        <div className="h-4"> </div>
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
