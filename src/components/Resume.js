import React from "react";
import Styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={Styles.resumeStyle}>
      <iframe
        id="pdf-js-viewer"
        src="lib/web/viewer.html?file=../../Michael K. Taylor Resume.pdf"
        title="webviewer"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Resume;
