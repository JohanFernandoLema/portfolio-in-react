const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I am Johan</p>
          </div>
          <div>
            <p>
              I have a solid understanding when it comes to implement and
              develop website projects. My wide experience obtained by creating
              complex projects, assisting small businesses and keeping myself
              with the latest concepts of the frameworks that I use sre very
              helpful at the moment of delivering a maintainable and readable
              code.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
