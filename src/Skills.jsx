import React from "react";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full h-[60%] flex flex-col items-center justify-center px-4 lg:px-10 py-10 dark:bg-white dark:text-black 
          bg-black text-white gap-y-10"
    >
      <div className="flex flex-col items-center gap-y-10 max-w-[800px]">
        <h2 className="text-4xl lg:text-6xl font-bold">My skills</h2>
        <img
          src={process.env.PUBLIC_URL + `/skills.png`}
          alt="avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
        <h3 className="text-2xl lg:text-3xl text-center">
          <ul>
            <li>HTML, CSS, JS</li>
            <li>.NET</li>
            <li>React</li>
            <li>Problem solving</li>
            <li>Teamwork</li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
