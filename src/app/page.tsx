import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      className={styles.main}
    >
      <p style={{ color: "white" }}>
        {"Hey! Welcome to my website. There'll be more here soon."}
      </p>
    </div>
  );
}
