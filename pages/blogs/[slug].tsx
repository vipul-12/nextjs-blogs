import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import axios from "axios";
import { error } from "console";

const blogs = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [state, setState] = useState<any>({});

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getBlog?slug=${slug}`);
      return response.data;
    } catch (error) {
      console.log("INTERNAL SERVER ERROR");
      return null;
    }
  }

  useEffect(() => {
    fetchBlog().then((response) => {
      setState(response);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (

    <div className={styles.container}>
      {state &&
        <main className={styles.main}>
          <h1>{state.title}</h1>
          <hr />

          <p>
            {state.content}
          </p>

          <div>
            <h5> ~ {state.author}</h5>
          </div>
        </main>}
    </div>
  );
};

export default blogs;
