import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Assets/logo_jl.png'
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between item-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo_icon" style={{ width: '50px' }} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
