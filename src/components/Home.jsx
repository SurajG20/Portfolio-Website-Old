import React from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-1000">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-zinc-100 text-2xl ">Hi, My name is</p>
        <p className="text-5xl sm:text-7xl font-bold text-zinc-100 mt-2">
          Suraj Goswami
        </p>
        <p className="text-2xl sm:text-4xl mt-2  font-medium text-gray-300">
          Frontend Developer, Engineering student.
        </p>
        <div className="mt-6 flex gap-6">
          <a href="https://github.com/SurajG20">
            <IoLogoGithub className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
          </a>
          <a href="https://www.linkedin.com/in/suraj-goswami01">
            <IoLogoLinkedin className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
          </a>
          <a href="mailto:Surajgosami3000@gmail.com">
            <IoMail className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
          </a>
        </div>
        <div>
          <button className="text-gray-500 group border-2 border-b-gray-500 px-4 py-2 my-10 flex items-center hover:bg-zinc-800 hover:text-white hover:border-white">
            View Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
