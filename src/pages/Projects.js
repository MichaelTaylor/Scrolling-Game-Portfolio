import React from "react";
import Styles from "./Projects.module.css";
import NegativeWorld from "../components/NegativeWorld";
import TonightWeRiot from "../components/TonightWeRiot"
import OutpostDelta from "../components/OutpostDelta";

const Projects = () => {
  return (
    <div className={Styles.projects}>
      <NegativeWorld/>
      <TonightWeRiot/>
      <OutpostDelta/>
    </div>
  );
};

export default Projects;
