import React, { useState } from "react";
import Styles from "./About.module.css";
import Avatar from "../images/PD Yearbook Portraite.svg";
import EmailLogo from "../images/Email Logo.svg";
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
        Been a programmer for many years in the game industry. Unity is my
        weapon of choice.
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
