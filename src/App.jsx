import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import background1 from "./assets/backgrounds/first.png";
import background2 from "./assets/backgrounds/second.png";
import background3 from "./assets/backgrounds/third.jpg";
import lander1 from "./assets/landers/first_and_third.png";
import lander2 from "./assets/landers/second.png";
import rocket from "./assets/rocket.png";
import infobar from "./assets/infobar.png";

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* this is the first section of the pagination */}
            <div className='section w-full h-screen flex-col bg-blue-600'>
              <div className='w-full relative h-screen'>
                <img src={background1} alt="background" className='w-full h-screen object-cover' />
                <Navbar />

                {/* kutchina */}
                <motion.div
                  initial={{ x: '-100vw' }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  className="w-[90%] md:w-[500px] h-[300px] text-white absolute left-5 md:left-20 top-32 md:top-64 flex-col space-y-5 hover:scale-105 duration-300 hover:duration-300"
                >
                  <span className="uppercase text-3xl md:text-5xl font-extrabold tracking-wider">chandrayan 3</span>
                  <p className="text-sm md:text-md font-semibold">The launch of the Chandrayan-3 took place on July 14, 2023 and injection of 100km circular polar orbit is completed successfully as part of phase one.</p>
                </motion.div>

                <motion.img
                  src={lander1}
                  alt="Lander1"
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
                  className='w-[200px] md:w-[400px] absolute left-10 md:left-32 bottom-12 md:bottom-24'
                />
                <motion.img
                  src={lander2}
                  alt="Lander2"
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 50, delay: 0.7 }}
                  className='w-[150px] md:w-[250px] absolute left-[30%] md:left-[40%] bottom-10 md:bottom-20'
                />
                <motion.img
                  src={lander1}
                  alt="Lander2"
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stiffness: 50, delay: 0.9 }}
                  className='w-[100px] md:w-[180px] absolute left-[50%] md:left-[65%] bottom-5 md:bottom-10'
                />
              </div>
            </div>

            {/* this is the second section of the pagination */}
            <div className='section w-full h-screen flex-col'>
              <div className='w-full relative h-screen'>
                <img src={background2} alt="background" className='w-full h-screen object-cover absolute -z-50' />
                <div className='w-full h-screen flex justify-center items-center'>
                  <div className='text-white w-[90%] md:w-[900px] h-[300px] text-lg md:text-xl absolute text-center uppercase font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam nemo quod deserunt accusantium minus tenetur repellat maiores consequatur quae animi eius libero reprehenderit vitae doloremque debitis repellendus labore? Totam ducimus quo optio, quas quos quisquam distinctio provident vel officiis corrupti sapiente minus velit placeat eum fuga aliquid, soluta dolore labore numquam nemo possimus, saepe tempora vero. Quia ducimus in voluptatum, delectus ea asperiores harum quas debitis tempora? Unde, similique!
                  </div>
                </div>
              </div>
            </div>

            {/* this is the third section of the pagination */}
            <div className='section w-full h-screen flex-col bg-black'>
              <div className='w-full relative h-screen'>
                <img src={rocket} alt="rocket" className='w-[150px] md:w-[300px] absolute left-[30%] md:left-[40%]' />

                <div className='w-[90%] md:w-[450px] h-[300px] absolute left-5 md:left-20 top-12 md:top-24 p-5 md:p-10 py-8 md:py-16'>
                  <div className='text-sm md:text-lg font-light uppercase text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.
                  </div>
                  <img src={infobar} alt="Infobar" className='absolute bottom-0 right-0' />
                </div>

                <div className='w-[90%] md:w-[450px] h-[300px] absolute right-5 md:right-20 top-28 md:top-56 p-5 md:p-10 py-8 md:py-16'>
                  <div className='text-sm md:text-lg text-right font-light uppercase text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.
                  </div>
                  <img src={infobar} alt="Infobar" className='absolute bottom-0 left-0 -scale-x-100' />
                </div>

                <div className='w-[90%] md:w-[450px] h-[300px] absolute left-5 md:left-20 bottom-24 md:bottom-44 p-5 md:p-10 py-8 md:py-16'>
                  <div className='text-sm md:text-lg font-light uppercase text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.
                  </div>
                  <img src={infobar} alt="Infobar" className='absolute bottom-0 right-0' />
                </div>

                <div className='w-[90%] md:w-[450px] h-[300px] absolute right-5 md:right-20 bottom-6 md:bottom-12 p-5 md:p-10 py-8 md:py-16'>
                  <div className='text-sm md:text-lg text-right font-light uppercase text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.
                  </div>
                  <img src={infobar} alt="Infobar" className='absolute bottom-0 left-0 -scale-x-100' />
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;