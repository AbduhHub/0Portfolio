import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/@TechyNoise"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>TechyNoise</span>
          </h2>
        </a>

        <a
          href="https://wa.link/9aqkei"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+91 8147489123</span>
          </h2>
        </a>

        <a
          href="https://www.instagram.com/king__star66"
          className="contact instagram"
        >
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>king__star66</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
