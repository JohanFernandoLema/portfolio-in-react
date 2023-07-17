import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'connect_gmailJL',
        'template_scqc58w',
        refForm.current,
        'AxNkJ-9da20n7eJ3c'
      )
      .then(() => {
        alert('Message Sent')
        window.location.reload(false)
      })
      .catch(() => {
        alert('Message could not be send')
      })
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={refForm}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-700">
            Content
          </p>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          className="p-2 my-4 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          id="message"
          rows="10"
          placeholder="Message"
          className="p-2 bg-[#ccd6f6]"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's get in Touch
        </button>
      </form>
    </div>
  )
}
export default Contact
