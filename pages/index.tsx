import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BatBlogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/batman.svg" />
      </Head>
      <main>
        <div className={styles.heading}>
          <h1>Bat Blogs</h1>
        </div>

        <div className={styles.image}>
          <Image
            src="/batman-logo.svg"
            alt="batman Logo"
            width={500}
            height={220}
            priority
          />
        </div>

        <div className={styles.blogs}>
          <h4>Blogs go here</h4>
        </div>
      </main>
    </div>

  );
}
