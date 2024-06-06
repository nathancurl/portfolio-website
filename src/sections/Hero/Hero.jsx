import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Nathan Curl"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nathan
          <br />
          Curl
        </h1>
        <h2>Computer Science Student/Full-Stack Software Engineer</h2>
        <span>
          <a href="https://www.linkedin.com/in/nathancurl/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/nathancurl" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern applications using a variety of
          technologies.
        </p>
        <a href={CV}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
