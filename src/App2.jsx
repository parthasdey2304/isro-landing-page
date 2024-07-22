  import Navbar from "./Components/Navbar";
  import rocket from "./assets/rocket.png";
  import pluto from "./assets/pluto.jpg";
  import pluto2 from "./assets/pluto2.jpg"
  import pluto3 from "./assets/pluto3.jpg"
  import background from "./assets/home1.png"
  import { useState } from "react";

  function App() {
    const [backgroundImage, setBackgroundImage] = useState(background);


    return (
      <div className="w-full h-[1000px] bg-cover">
        { /* Background Image */ }
        <img src={ backgroundImage } alt="Background Image" className="w-full h-screen fixed -z-50 object-cover" />

        { /* Rocket Image */ }
        <div className="w-full absolute -bottom-56 flex-col">
          <div className="w-full flex justify-center relative">
            <img src={ rocket } alt="rocket" className="w-96 object-fill hover:scale-105 duration-300 hover:duration-300" />
          </div>
        </div>

        { /* Carousal Image chooser */ }
        <div className="w-full absolute bottom-0 left-2 flex justify-center">
          <div className="w-[800px] h-[200px] bg-white/20 backdrop-blur-lg rounded-tr-[60px] rounded-tl-[60px] flex justify-center items-center space-x-10">
            <div className="w-[200px] h-[130px] bg-zinc-500 rounded-3xl">
              <img src={ pluto } alt="ref image" className="object-cover w-full h-full rounded-3xl hover:scale-105 duration-300 hover:duration-300" onClick={() => {setBackgroundImage(pluto)}} />
            </div>
            <div className="w-[200px] h-[130px] bg-zinc-500 rounded-3xl">
              <img src={ pluto2 } alt="ref image" className="object-cover w-full h-full rounded-3xl hover:scale-105 duration-300 hover:duration-300" onClick={() => {setBackgroundImage(pluto2)}} />  
            </div>
            <div className="w-[200px] h-[130px] bg-zinc-500 rounded-3xl">
              <img src={ pluto3 } alt="ref image" className="object-cover w-full h-full rounded-3xl hover:scale-105 duration-300 hover:duration-300" onClick={() => {setBackgroundImage(pluto3)}} />  
            </div>
          </div>
        </div>

        { /* Useless Text */}
        <div className="w-[500px] h-[300px] text-white absolute left-20 top-96 flex-col space-y-5 hover:scale-105 duration-300 hover:duration-300">
          <span className="uppercase text-5xl font-extrabold tracking-wider">chandrayan 3</span>
          <p className="text-md font-semibold">The launch of the Chandrayan-3 took place on July 14, 2023 and injection of 100km circular polar orbit is completed successfully as part of phase one.</p>
        </div>

        { /* ISRO Text */}
        <div className=" text-xl text-white absolute tracking-[3px] -rotate-90 top-96 -right-32">Indian Space Research Organisation</div>
        <Navbar />
      </div>
    )
  }

  export default App
