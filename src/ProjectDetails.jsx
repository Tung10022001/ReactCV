import React from "react";

export default function ProjectDetails({ project }) {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <img
          src={process.env.PUBLIC_URL + project.image}
          alt="project logo"
          className="w-[60px] h-[60px]"
        />
        <div>
          <h4 className="text-2xl lg:text-3xl">{project.name}</h4>
          <p className="text-xl lg:text-2xl">{project.usage}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-base lg:text-lg">{project.role}</p>
        <p className="text-base lg:text-lg">Technology: {project.tech}</p>
      </div>
    </div>
  );
}
