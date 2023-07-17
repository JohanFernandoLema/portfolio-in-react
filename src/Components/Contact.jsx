const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-700">
            Content
          </p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-[#ccd6f6]"
        />
        <input
          type="text"
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
