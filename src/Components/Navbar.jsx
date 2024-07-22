function Navbar() {
  return (
    <div className="absolute top-0 w-full h-[100px] text-white flex justify-evenly items-center px-20">
        <span className="text-5xl font-extrabold tracking-wide">ISRO</span>
        <ul className="w-full flex justify-center font-semibold">
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">home</li>
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">missions</li>
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">activities</li>
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">prorammes</li>
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">resources</li>
            <li className="uppercase px-10 hover:bg-white/30 duration-300 hover:duration-300 py-4 rounded cursor-pointer">contact us</li>
        </ul>
    </div>
  )
}

export default Navbar;