"use client"
import { TypeAnimation } from "react-type-animation";
import styles from "./page.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className={styles.main}>
      <TypeAnimation
        className={styles.typeAnimation}
        sequence = {[
          "Hello!",
          2000,
          "Bonjour!",
          2000,
          "こんにちわ！",
          2000,
          "Hola!",
          2000,
          "안녕하세요!",
          2000,
          "你好!",
          2000,
        ]}
        repeat={Infinity}
        preRenderFirstString={true}
      />
      <div className={styles.homeTitle}>
        Welcome to my website! I'm Timothy Choy
      </div>
      <p>
        {"Reach out to me here:"}
      </p>
      <div className={styles.icons}>
        <a href={`mailto:timchoy99@gmail.com`} target="_blank">
          <EmailIcon />
        </a>
        <a href={`https://www.linkedin.com/in/tim-choy/`} target="_blank">
          <LinkedInIcon />
        </a>
        <a href={`https://github.com/TimChoy`} target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}
