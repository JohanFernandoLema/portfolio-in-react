import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello there! my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Johan Fernando Lema
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Enthusiastic Software Developer interested in the full stack web
          development, I enjoy pushing myself through tough challenges which can
          help me to improve my skills and knowledge at the moment of delivering
          a neat, readable, and maintainable code. When I am not moving pixel
          over the screen I enjoy doing other activities as working-out or
          cooking.
        </p>
        <div>
          <button>
            View Work <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home
