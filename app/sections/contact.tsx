'use client';

import { useState, useRef } from "react";

export default function Contact() {

  const firstInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const emptyForm = { name: '', email: '', subject: '', message: '' };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jersoncortes.com/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        //body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error ?? `Status ${response.status}`);
      }

      const result = await response.json();

      console.log("Success:", result);

      setFormData(emptyForm);

      (e.target as HTMLFormElement).reset();
      firstInputRef.current?.focus();

    } catch (err: any) {

      console.error("Submission failed:", err);

    }
  };

  return (
    <section id="Contact" className="w-full md:h-[calc(100vh-6rem)]">
      <div className="flex flex-col pt-10 pb-15 relative 2xl:px-80" id="Contact">
        <h2 className="text-(--red) text-4xl pb-6 md:ml-20">[CONTACT]</h2>
        <p className="md:ml-20 md:w-100">I’m always open to opportunities, be it freelance, contract, or cool projects so reach out!</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pt-6 pb-16 md:mx-20 md:absolute md:right-0 md:pt-15 md:w-110 2xl:mx-100"
        >
          <div className="flex flex-row justify-between gap-2 mb-4">
            <div className="flex flex-col flex-1">
              <label className="font-bold">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-black focus:outline-none"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-bold">Email</label>
              <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-black focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
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
