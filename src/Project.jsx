import React from "react";
import ProjectDetails from "./ProjectDetails";

const projects = [
  {
    name: "Hotel management app",
    usage: "App to book hotel",
    role: "Working on user inteface in team of 2",
    tech: ".NET",
    image: "/hotel.png",
  },
  {
    name: " Game zombie shooter",
    usage: "Play for fun",
    role: "Working on user inteface in team of 3",
    tech: ".NET",
    image: "/zombie.png",
  },
  {
    name: "Cafe shop management app",
    usage: "App to sell coffee and food",
    role: "Working on user inteface in team of 3",
    tech: ".NET",
    image: "/coffee.webp",
  },
];

export default function Project() {
  return (
    <div
      id="projects"
      className="w-full h-full flex flex-col items-center justify-center px-4 lg:px-10 py-10 bg-white text-black 
    dark:bg-black dark:text-white gap-y-10"
    >
      <div className="flex flex-col gap-y-10 max-w-[800px]">
        <h2 className="text-4xl lg:text-6xl font-bold text-center">
          My Projects
        </h2>
        <ul className="flex flex-col gap-y-4">
          {projects.map((project) => (
            <ProjectDetails
              project={project}
              key={project.name}
            ></ProjectDetails>
          ))}
        </ul>
      </div>
    </div>
  );
}
