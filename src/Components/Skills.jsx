import CssImg from '../Assets/css.png'
import GithubImg from '../Assets/github.png'
import NodeImg from '../Assets/node.png'
import MongoImg from '../Assets/mongo.png'
import ReactImg from '../Assets/react.png'
import javascript from '../Assets/tailwind.png'
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">
            Some of the latest technologies that I have a deeply understanding
            are these...
          </p>
        </div>
        {/* CSS */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CssImg} alt="css-icon" className="w-20 mx-auto" />
            <p>Css</p>
          </div>

          {/* Node */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NodeImg} alt="node-icon" className="w-20 mx-auto" />
            <p>Node.js</p>
          </div>

          {/* React */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} alt="react-icon" className="w-20 mx-auto" />
            <p>React.js</p>
          </div>

          {/* JS */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={javascript} alt="js-icon" className="w-20 mx-auto" />
            <p>JavaScript</p>
          </div>

          {/* Mongo */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={MongoImg} alt="mongo-icon" className="w-20 mx-auto" />
            <p>MongoDB</p>
          </div>

          {/* Github */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={GithubImg} alt="github-icon" className="w-20 mx-auto" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
