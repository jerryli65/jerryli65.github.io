import React from "react";
import "./contact.css";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bgsdymn",
        "template_hyiypns",
        form.current,
        "vd9B3A5Umng_ft5LM"
      )
      .then(
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
    <section id="contact">
      {/* <h5>Get in Touch</h5>
      <h2>Contact Me</h2> */}

      <div className="container contact__container">
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            // font-family="Arial"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            // font-family="Arial"
            required
          />
          <textarea
            name="message"
            rows="1"
            placeholder="Message"
            // font-family="Arial"
            required
          />
          <button type="submit" className="btnsubmit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
