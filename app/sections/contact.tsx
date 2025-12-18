export default function Contact() {
  return (
    <section id="Contact" className="w-full md:h-[calc(100vh-6rem)]">
      <div className="flex flex-col pt-10 pb-15 relative" id="Contact">
        <h2 className="text-(--red) text-4xl pb-6 md:ml-20">[CONTACT]</h2>
        <p className="md:ml-20 md:w-100">I’m always open to opportunities, be it freelance, contract, or cool projects so reach out!</p>
        <form className="flex flex-col pt-6 pb-16 md:mx-20 md:absolute md:right-0 md:pt-15 md:w-110">
          <div className="flex flex-row justify-between gap-2 mb-4">
            <div className="flex flex-col flex-1">
              <label className="font-bold">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full border border-black focus:outline-none"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-bold">Email</label>
              <input
                id="email"
                type="text"
                required
                className="w-full border border-black focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold">Subject</label>
            <input
              id="subject"
              type="text"
              required
              className="border border-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold">Message</label>
            <textarea
              id="message"
              required
              className="h-32 border border-black focus:outline-none resize-none"
            >
            </textarea>
          </div>
          <input
            type="submit"
            className={`bg-(--red) amulya-bolditalic text-white text-lg ml-auto my-4 p-0.5`}
            value="SEND MESSAGE"
          />
        </form>
      </div>
    </section>
  )
}
