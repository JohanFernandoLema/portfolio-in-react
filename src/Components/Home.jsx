import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"></div>
      <p>Hello there! my name is</p>
      <h1>Johan Fernando Lema</h1>
      <h2>I'm a full Stack Web Developer</h2>
      <p>
        Enthusiastic Software Developer interested in the full stack web
        development, I enjoy pushing myself through tough challenges which can
        help me to improve my skills and knowledge at the moment of delivering a
        neat, readable, and maintainable code. When I am not moving pixel over
        the screen I enjoy doing other activities as working-out or cooking.
      </p>
      <div>
        <button>
          View Work <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  )
}
export default Home
