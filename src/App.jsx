import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './Components/Navbar';
import background1 from "./assets/backgrounds/first.png";
import background2 from "./assets/backgrounds/second.png";
import background3 from "./assets/backgrounds/third.jpg";
import lander1 from "./assets/landers/first_and_third.png"
import lander2 from "./assets/landers/second.png"
import rocket from "./assets/rocket.png";
import infobar from "./assets/infobar.png";

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section w-full h-screen flex-col bg-blue-600'>
              <div className='w-full relative h-screen'>
                <img src={background1} alt="background" className='w-full h-screen object-cover' />
                <Navbar />
                <div className="w-[500px] h-[300px] text-white absolute left-20 top-64 flex-col space-y-5 hover:scale-105 duration-300 hover:duration-300">
                    <span className="uppercase text-5xl font-extrabold tracking-wider">chandrayan 3</span>
                    <p className="text-md font-semibold">The launch of the Chandrayan-3 took place on July 14, 2023 and injection of 100km circular polar orbit is completed successfully as part of phase one.</p>
                </div>

               <img src={ lander1 } alt="Lander1" className='w-[400px] absolute left-32 bottom-24' />
               <img src={ lander2 } alt="Lander2" className='w-[250px] absolute left-[40%] bottom-20' />
               <img src={ lander1 } alt="Lander2" className='w-[180px] absolute left-[65%] bottom-10' />

              </div>
            </div>

            <div className='section w-full h-screen flex-col'>
              <div className='w-full relative h-screen'>
                <img src={ background2 } alt="background" className='w-full h-screen object-cover absolute -z-50' />
                <div className='w-full h-screen flex justify-center items-center'>
                    <div className='text-white w-[900px] h-[300px] text-xl absolute text-center uppercase font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam nemo quod deserunt accusantium minus tenetur repellat maiores consequatur quae animi eius libero reprehenderit vitae doloremque debitis repellendus labore? Totam ducimus quo optio, quas quos quisquam distinctio provident vel officiis corrupti sapiente minus velit placeat eum fuga aliquid, soluta dolore labore numquam nemo possimus, saepe tempora vero. Quia ducimus in voluptatum, delectus ea asperiores harum quas debitis tempora? Unde, similique!</div>
                </div>
              </div>
            </div>

            <div className='section w-full h-screen flex-col bg-black'>
              <div className='w-full relative h-screen'>
                <img src={ rocket } alt="rocket" className='w-[300px] absolute left-[40%]' />

                <div className='w-[450px] h-[300px] absolute left-20 top-28 p-10 py-16'>
                  <div className='text-lg font-light uppercase text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.</div>
                  <img src={ infobar } alt="Infobar" className='absolute bottom-0 right-0' />
                </div>

                <div className='w-[450px] h-[300px] absolute right-20 top-36 p-10 py-16'>
                  <div className='text-lg text-right font-light uppercase text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.</div>
                  <img src={ infobar } alt="Infobar" className='absolute bottom-0 left-0 -scale-x-100' />
                </div>

                <div className='w-[450px] h-[300px] absolute left-20 bottom-36 p-10 py-16'>
                  <div className='text-lg font-light uppercase text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.</div>
                  <img src={ infobar } alt="Infobar" className='absolute bottom-0 right-0' />
                </div>

                <div className='w-[450px] h-[300px] absolute right-20 bottom-32 p-10 py-16'>
                  <div className='text-lg text-right font-light uppercase text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem facere ipsum expedita esse mollitia placeat nesciunt provident numquam fugiat.</div>
                  <img src={ infobar } alt="Infobar" className='absolute bottom-0 left-0 -scale-x-100' />
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