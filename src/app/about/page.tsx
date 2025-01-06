import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageDiv}>
          <Image
            src="/profile.png"
            width={300}
            height={300}
            alt="My headshot photo"
            className={styles.headshot}
          />
        </div>
        <div className={styles.description}>
          <p>
            Hi! Nice to meet you, I'm Timothy Choy.
            <br />
            <br />
            {/* Education and professional experience */}I am a software
            engineer with expertise in web development. I graduated from
            McMaster University with a degree in Software Engineering and
            Management, and have had valuable work experience through
            internships at companies such as IBM. I primarily work with ReactJS
            for web development and Python for my go-to scripting language, but
            I'm also familiar with Java, C and Golang, gained through personal
            projects and internships. I'm passionate about learning new things
            and challenging the status quo, and find myself tinkering and trying
            out new technologies.
            <br />
            <br />
            {/* Hobbies and other fun stuff */}Outside of software development,
            I find myself enjoying games and music. I'm a big fan of MMO video
            games and enjoy the challenge of working in large groups to take
            down raids or bosses. You can find me at board game cafes (since
            owning board games themselves can be pricey). My current favourite
            board games are Skull (a simple, yet beautifully designed game
            revolving around betting and deception), and Hues and Cues (a game
            where you guess a colour based on a prompt, where you win if you're
            the closest to the actual colour). You can also find me
            practising... my voice. Though I'm no longer part of any bands or
            choirs, I still love to sing. The only time I'll be performing now
            is on Sundays at my church.
          </p>
        </div>
      </div>
    </div>
  );
}
