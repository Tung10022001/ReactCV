import React from "react";
import About from "./About";
import Skills from "./Skills";

export default function Main() {
  return (
    <div
      className="grow bg-cover pt-16 bg-center relative"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/dev.jpeg)`,
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-md">
        <div className="w-full lg:w-3/5 text-white dark:text-orange ">
          <h1 className="text-4xl lg:text-6xl font-semibold px-4 text-center">
            Hello there. Welcome to my CV.
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold px-4 text-center mt-16">
            I am Vu Nguyen Thanh Tung, a student at iSpace. I am currently a new
            developer.
            <br />
            <br />I am living in Ho Chi Minh city and seeking a job near me.
          </h2>
        </div>
      </div>
      <div className="w-full h-full" id="home"></div>
      <About></About>
      <Skills></Skills>
    </div>
  );
}
