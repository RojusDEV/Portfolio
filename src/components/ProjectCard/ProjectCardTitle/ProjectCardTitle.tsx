import React from "react";
import "./ProjectCardTitle.scss";
const ProjectCardTitle = ({ children }: { children: React.ReactNode }) => {
  return <span className="project-card-title">{children}</span>;
};

export default ProjectCardTitle;
