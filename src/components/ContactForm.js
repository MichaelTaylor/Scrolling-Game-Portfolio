import React from "react";
import EmailJS from "emailjs-com";
import Styles from "./ContactForm.module.css";

//Details at https://dashboard.emailjs.com/admin

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    EmailJS.sendForm(
      "service_cokmfmm",
      "template_sye8zsl",
      e.target,
      "user_tizXV5cqb3QMiQ4eCjqDc"
    ).then(
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
