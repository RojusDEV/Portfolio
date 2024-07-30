import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaSms } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "./Contact.scss";
import ReactGA from "react-ga4";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const schema = z.object({
    user_email: z
      .string()
      .min(1, { message: "Email should be atleast 1 character long" })
      .max(100, { message: "Email should be bellow 100 characters long" })
      .email(),
    user_name: z
      .string()
      .min(1, { message: "Name should be atleast 1 character long" })
      .max(100, { message: "Name should be bellow 100 characters long" }),
    message: z
      .string()
      .min(20, { message: "message should be atleast 20 characters long" })
      .max(5000, { message: "Message should be bellow 5000 characters long" }),
  });

  type schemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({ resolver: zodResolver(schema) });
  const sendEmail: SubmitHandler<schemaType> = (data) => {
    console.log(data);
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setShowConfetti(true);
            console.log("SUCCESS!");
          },
          (error) => {
            setShowConfetti(false);
            console.log("FAILED...", error.text);
          }
        );
      ReactGA.event({
        category: "your category",
        action: "Send email",
        label: "Form", // optional
        nonInteraction: false, // optional, true/false
        transport: "xhr", // optional, beacon/xhr/image
      });
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
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <input
              type="text"
              {...register("user_name")}
              placeholder="Name: "
            />
            {errors.user_name && (
              <span className="form-error-message">
                {errors.user_name?.message}
              </span>
            )}
            <input
              type="email"
              {...register("user_email")}
              placeholder="Email: "
            />
            {errors.user_email && (
              <span className="form-error-message">
                {errors.user_email?.message}
              </span>
            )}
            <textarea placeholder="Message: " {...register("message")} />
            {errors.message && (
              <span className="form-error-message">
                {errors.message.message}
              </span>
            )}
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      {showConfetti && <Fireworks autorun={{ speed: 3, duration: 2000 }} />}
    </section>
  );
};

export default Contact;
