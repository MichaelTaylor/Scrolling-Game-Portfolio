import React from "react";
import Styles from "./Projects.module.css";
import { GameCardData } from "../data/GameCardData.js";
import GameCard from "../components/GameCard";

const Projects = () => {
  const data = GameCardData.map((project) => (
    <GameCard
      key={project.id}
      title={project.title}
      description={project.description}
      footage={project.gameFootage}
      platformInfo={project.platformInfo}
    />
  ));

  return <div className={Styles.projects}>{data}</div>;
};

export default Projects;
