export default function Contact() {
  return (
    <div className="flex flex-col pt-10 pb-15 relative " id="AboutMe">
      <h2 className="text-(--red) text-4xl pb-6">[CONTACT]</h2>
      <p>I’m always open to opportunities, be it freelance, contract, or cool projects so reach out!</p>
      <form className="flex flex-col pt-6 pb-16">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col mb-4">
            <label className="font-bold">Name</label>
            <input
              id="name"
              type="text"
              required
              className=" w-full border border-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input
              id="name"
              type="text"
              required
              className="w-full border border-black focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-bold">Subject</label>
          <input
            id="name"
            type="text"
            required
            className="border border-black focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-bold">Message</label>
          <textarea 
            id="details" 
            required 
            className="h-32 border border-black focus:outline-none resize-none"
          >
          </textarea>
        </div>
        <input 
          type="submit" 
          className={`bg-(--red) amulya-bolditalic text-white  ml-auto my-4 `} 
          value="SEND MESSAGE"
        />
      </form>
    </div>
  )
}
