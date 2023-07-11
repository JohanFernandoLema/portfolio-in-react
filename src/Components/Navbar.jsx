import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between item-center px-4 bg-[#0a192f] text-gray-300">
      <div></div>
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
