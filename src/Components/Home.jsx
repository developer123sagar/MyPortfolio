import React from "react";
import Profile from "../Components/PP.Jpg";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="bg-bblack flex py-28 h-full">
        <div className="w-2/4 flex justify-center items-center flex-col ml-32 mb-4">
          <p className="text-4xl text-tgolden">I'am a</p>
          <h1 className="text-7xl text-twhite">
            <Typewriter
              onInit={(type) => {
                type
                  .typeString("Web Designer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Graphics Designer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Freelancer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Web Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-base mt-4 text-tgray text-center">
            Get your creative, beautiful and engaging website from a passionate,
            frontend focused Web Developer for clean and efficient code with
            great user experience.
          </p>
          <button className="bg-tgray border-2 border-tgray px-3 flex items-center rounded-sm text-twhite hover:bg-bblack hover:text-tgolden m-10 text-lg">
            <span className="m-2">Download CV</span>
            <ion-icon name="code-download-sharp" size="large"></ion-icon>
          </button>
        </div>
        <div className="w-2/4 flex justify-center items-center flex-col">
          <div className="h-96 w-80 rounded-3xl overflow-hidden text-lg p-0 border-0 object-fill block">
            <img
              src={Profile}
              alt="Profile"
              className="h-full w-full object-cover block"
            />
          </div>
          <span className="text-3xl text-twhite font-bold mt-5 cursor-pointer">
            Roju Ghimire
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
