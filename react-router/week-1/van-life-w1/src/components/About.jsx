import aboutImage from "../images/aboutImage.png";
import Button from "./Button";
function About() {
  return (
    <div className="about">
      <img className="about--image" alt="About" src={aboutImage} />
      <div className="about--textContainer">
        <h1 className="about--title">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about--description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br/>
          <br/>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about--callToAction">
        <h2 className="about--CTAText">
          Your destination is waiting.<br/>Your van is ready.
        </h2>
        <Button
          backgroundColor={"#161616"}
          color={"#FFFFFF"}
          text={"Explore our vans"}
          className={"button--CTA button--about"}
        />
      </div>
    </div>
  );
}

export default About;
