import Head from "next/head";
// import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Blogs from "./blogs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BatBlogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className={styles.heading}>
          <h1>Bat Blogs</h1>
        </div>

        <div className={styles.image}>
          {/* IMAGE TAG FROM NEXTJS DOESN"T WORK ON STATIC SITES */}
          {/* <Image
            src="/batman-logo.svg"
            alt="batman Logo"
            width={500}
            height={220}
            priority
          /> */}
          <img src="/batman-logo.svg"
            alt="batman Logo"
            width={500}
            height={220}
          />

        </div>

        <div className={styles.blogs}>
          <h2>Blogs go here</h2>
          <div className={styles.blogItem}>
            <h3>BlogItem Heading</h3>
            <p className={styles.description}>
              BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
              Content, BlogItem Content.{" "}
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>BlogItem Heading</h3>
            <p className={styles.description}>
              BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
              Content, BlogItem Content.{" "}
            </p>
          </div>
          <div className={styles.blogItem}>
            <h3>BlogItem Heading</h3>
            <p className={styles.description}>
              BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
              Content, BlogItem Content.{" "}
            </p>
          </div>
          {/* <Blogs /> */}
        </div>
      </main>
    </div>
  );
}
