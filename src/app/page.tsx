import Image from "next/image";
import styles from "./page.module.css";
import Heading from "@/components/heading";
import ThemeController from "@/components/theme-controller";
import Column from "@/components/column";
import Section from "@/components/section";
import Text from "@/components/text";

export default function Home() {
  return (
    <div className={`${styles.page} bg-surfacecontainerhighest`}>
      <main className={styles.main}>
        <ThemeController />
        <Section padding="none">
          <div></div>
        </Section>
        <Column
          alignItems="center"
          justifyContent="start"
          gap="md" 
        >
          <Heading 
            tag="h1" 
            fontClass="display2-bold"
            className={styles.primary}
          >
            Jerson Cortes P.
          </Heading>
          <Text fontClass="body" tag="footer" color="onbackground">
            Welcome to my GitHub Page!
          </Text>
        </Column>
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
