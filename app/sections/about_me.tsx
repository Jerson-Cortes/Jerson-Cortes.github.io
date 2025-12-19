export default function AboutMe() {
  return (
    <section id="AboutMe" className="w-full md:h-[calc(100vh-6rem)]">
      <div className="flex flex-col mt-22 relative 2xl:px-80" id="AboutMe">
        <h2 className="text-(--red) text-4xl md:ml-20">[ABOUT ME]</h2>
        <p className="indent-8 py-8 md:w-100 md:mt-5 md:ml-20">"Creating tools that deliver rich, user‑friendly experiences while safeguarding privacy."</p>
        <div className="flex flex-col md:flex-row md:flex-wrap pr-18 md:px-45 md:justify-center md:mt-4">
          <div className="md:w-1/2 md:px-2">
            <div className="flex items-center">
              <p className="font-bold text-lg pr-4">WHAT I DO</p>
              <hr className="flex-1" />
            </div>
            <p className="indent-8 pb-6">Develop beautiful, clean applications with advanced functionality for power users while remaining intuitive for non-technical users to master over time.</p>
          </div>
          <div className="md:w-1/2 md:px-2">
            <div className="flex items-center">
              <p className="font-bold text-lg pr-4">I AM</p>
              <hr className="flex-1" />
            </div>
            <p className="indent-8 pb-6">A perfectionist who pays attention to every detail be it functional or design wise. I advocate for privacy concious applications and contribute to open-source projects.</p>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center">
              <p className="font-bold text-lg pr-4">I LIKE</p>
              <hr className="flex-1" />
            </div>
            <p className="indent-8 pb-6">To learn languages, at the moment I'm focusing on eastern ones. Discover about the cosmos. Read about anything and everything. Sport bikes.</p>
          </div>
        </div>
        <p className="absolute right-1 top-50 text-4xl japanese writing-vertical-lr md:right-20 md:top-40 2xl:right-50">継続は力なり</p>
      </div>
    </section>
  )
}
