import React from "react";
import { useEffect } from "react";
import EmailJS from "emailjs-com";
import Styles from "./ContactForm.module.css";

const EMAIL_KEY = "/.netlify/functions/Email-Key/Email-Key.js";

const ContactForm = () => {
  const keys = {
    email: "",
    template: "",
    account: "",
  };

  useEffect(() => {
    getKeys();
  });

  const getKeys = async () => {
    const netlifyResponse = await fetch(`${EMAIL_KEY}`);
    const netlifyData = await netlifyResponse.json();
    console.log(netlifyData);
    keys.email = netlifyData.email;
    keys.template = netlifyData.template;
    keys.account = netlifyData.account;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    EmailJS.sendForm(keys.email, keys.template, e.target, keys.account).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className={Styles.contact__wrap}>
      <form onSubmit={sendEmail} className={Styles.contact__form}>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="from_name"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="from_email"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="form-control"
          id=""
          cols="30"
          rows="8"
          placeholder="Your Message"
          name="message"
        />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
