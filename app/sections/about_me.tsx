export default function AboutMe() {
  return (
    <div className="flex flex-col pt-10 relative" id="AboutMe">
      <h2 className="text-(--red) text-4xl">[ABOUT ME]</h2>
      <p className="indent-8 py-8">"Creating tools that deliver rich, user‑friendly experiences while safeguarding privacy."</p>

      <div className="pr-18">
        <div className="flex items-center">
          <p className="font-bold text-lg pr-4">WHAT I DO</p>
          <hr className="flex-1" />
        </div>
        <p className="indent-8 pb-6">Develop beautiful, clean applications with advanced functionality for power users while remaining intuitive for non-technical users to master over time.</p>
        <div className="flex items-center">
          <p className="font-bold text-lg pr-4">I AM</p>
          <hr className="flex-1" />
        </div>
        <p className="indent-8 pb-6">A perfectionist who pays attention to every detail be it functional or design wise. I advocate for privacy concious applications and contribute to open-source projects.</p>
        <div className="flex items-center">
          <p className="font-bold text-lg pr-4">I LIKE</p>
          <hr className="flex-1" />
        </div>
        <p className="indent-8 pb-6">To learn languages, at the moment I'm focusing on eastern ones. Discover about the cosmos. Read about anything and everything. Sport bikes.</p>
      </div>
      <p className="absolute right-1 top-50 text-4xl japanese writing-vertical-lr">継続は力なり</p>
    </div>
  )
}
