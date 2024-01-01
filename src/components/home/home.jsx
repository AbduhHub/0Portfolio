import "./home.css";
import img from "../props/me.jpg";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      {/* <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a> */}

      <h2>
        <div className="about">About Me</div> <br />
        <p>
          <span className="name">Ahmed Abdullah</span> - A 19-year-old
          enthusiast diving into the world of web development. Currently
          pursuing my 2nd year in Computer Science Engineering at Sharnbasva
          University, Gulbarga.
          <br /> Ever since I dipped my toes into the world of coding, I've been
          fascinated by the limitless possibilities of the web. I am currently
          honing my skills in the MERN stack, aiming to create seamless and
          engaging user experiences.
          <br /> In this fast-paced tech landscape, I embrace the mindset of a
          perpetual learner. I enjoy staying updated with the latest industry
          trends and technologies, always seeking to enhance my skills and take
          on new challenges.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
