import styles from "./page.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div className={styles.main}>
      <p style={{ fontSize: "48px" }}>
        {"Hello! Welcome to my website."}
      </p>
      <p>
        {"Find more about me here"}
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
