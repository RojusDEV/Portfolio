import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaSms } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "./Contact.scss";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(form.current) {
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <section className="contactMe">
      <div className="contactMe__wrapper">
        <div className="col col-testimonial">
          <span className="connect-heading">Connect with me:</span>
          <span className="connect-sub">
            Satisfied with me? Please contact me
          </span>
          <ul className="connect_socialMediaList">
            <li className="social-media-el">
              <FaFacebook size={35} />
            </li>
            <li className="social-media-el">
              <FaInstagram size={35} />
            </li>
            <li className="social-media-el">
              <FaSms size={35} />
            </li>
            <li className="social-media-el">
              <RiTwitterXFill size={35} />
            </li>
          </ul>
        </div>
        <div className="col">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name: " autoComplete="true" />
            <input type="email" name="user_email" placeholder="Email: " autoComplete="true"/>
            <textarea name="message" placeholder="Message: " />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      {showConfetti && <Fireworks autorun={{ speed: 3, duration: 1000 }} />}
    </section>
  );
};

export default Contact;
