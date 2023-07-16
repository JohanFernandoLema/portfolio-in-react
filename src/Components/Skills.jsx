import CssImg from '../Assets/css.png'
import GithubImg from '../Assets/github.png'
import NodeImg from '../Assets/node.png'
import MongoImg from '../Assets/mongo.png'
import ReactImg from '../Assets/react.png'
import TailwindImg from '../Assets/tailwind.png'
const Skills = () => {
  return (
    <div name="skills">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>
            Some of the latest technologies that I have a deeply understanding
            are these...
          </p>
        </div>
        <div>
          <div>
            <img src={CssImg} alt="css-icon" />
            <p>Css</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills
