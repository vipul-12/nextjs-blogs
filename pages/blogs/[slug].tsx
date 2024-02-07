import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const blogs = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{slug}</h1>
        <hr />

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          libero nostrum eos iste minus expedita, asperiores repudiandae
          aliquid. Cumque consectetur deleniti ut consequatur? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolor sint tenetur sunt porro
          ipsa laboriosam aperiam dignissimos voluptas dolore aliquid? Obcaecati
          architecto, dicta optio illum explicabo, quam quisquam debitis libero
          fugiat quia temporibus ducimus. Eum officia earum omnis commodi
          molestias numquam sapiente impedit quidem praesentium minima adipisci,
          ipsam tempore corporis.
        </div>
      </main>
    </div>
  );
};

export default blogs;
