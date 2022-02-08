import React, { useState } from "react";
import Styles from "./About.module.css";
import Avatar from "../images/PD Yearbook Portraite.svg";
import EmailLogo from "../images/Email Logo.svg";
import PDFFile from "../components/PDFFile";
import ContactForm from "../components/ContactForm";

const About = () => {
  const [showContact, setShowContact] = useState(false);

  const ContactHandler = () => {
    setShowContact(!showContact);
  };

  return (
    <div className={Styles.about}>
      <div>
        <img src={Avatar} alt="" className={Styles.avatarImage} />
      </div>
      <div className={Styles.textContact}>
        Been a programmer for many years in the game industry. Now I've adopted
        some Front End React skills. Feel free to contact me below.
      </div>

      <div className={Styles.imageGroup}>
        <img
          src={EmailLogo}
          alt=""
          onClick={ContactHandler}
          className={Styles.imageButton}
        />
      </div>

      {showContact && <ContactForm />}
    </div>
  );
};

export default About;
