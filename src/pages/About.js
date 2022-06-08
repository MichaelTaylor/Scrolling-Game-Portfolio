import React, { useState } from "react";
import Styles from "./About.module.css";
import Avatar from "../images/PD Yearbook Portraite.svg";
import EmailLogo from "../images/Email Logo.svg";
import ResumeLogo from "../images/Resume Logo.svg";
import ContactForm from "../components/ContactForm";
import Resume from "../components/Resume";

const About = () => {
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const ContactHandler = () => {
    setShowContact(!showContact);
    setShowResume(false);
  };

  const ResumeHandler = () => {
    setShowContact(false);
    setShowResume(!showResume);
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

        <img
          src={ResumeLogo}
          alt=""
          onClick={ResumeHandler}
          className={Styles.imageButton}
        />
      </div>

      {showResume && <Resume />}
      {showContact && <ContactForm />}
    </div>
  );
};

export default About;
