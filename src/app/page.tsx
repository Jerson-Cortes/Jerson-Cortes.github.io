import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.primary}>Jerson Cortes P.</h1>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/jerson-cortes-palomino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          href="mailto:jersoncortes.work@protonmail.com?subject=Feedback%20From%20GitHub%20Pages&body=Hello,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email.svg"
            alt="Email"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          href="https://github.com/Jerson-Cortes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
