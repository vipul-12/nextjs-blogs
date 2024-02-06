import React from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/Link";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <h2>Bilo Bagge Billeyan Da Ki Karengi</h2>
      <div className={styles.blogItem}>
        <Link href={"/blogs/BlogItem Heading - 1"}>
          <h3>BlogItem Heading - 1</h3>
        </Link>
        <p className={styles.description}>
          BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
          Content, BlogItem Content.{" "}
        </p>
      </div>
      <div className={styles.blogItem}>
        <h3>BlogItem Heading - 2</h3>
        <p className={styles.description}>
          BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
          Content, BlogItem Content.{" "}
        </p>
      </div>
      <div className={styles.blogItem}>
        <h3>BlogItem Heading - 3</h3>
        <p className={styles.description}>
          BlogItem Content, BlogItem Content, BlogItem Content, BlogItem
          Content, BlogItem Content.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blogs;
