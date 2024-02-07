import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import axios from "axios";

// SERVER SIDE RENDERING
export async function getServerSideProps(context: any) {

  const slug = context.query.slug;
  const response = await axios.get(`http://localhost:8000/api/getBlog?slug=${slug}`);
  const data = response.data;
  return {
    props: {
      data
    },
  }
}

const blog = (props: any) => {
  // const router = useRouter();
  // const { slug } = router.query;
  const [state, setState] = useState<any>(props.data);// injecting props into the state

  // const fetchBlog = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8000/api/getBlog?slug=${slug}`);
  //     return response.data;
  //   } catch (error) {
  //     console.log("INTERNAL SERVER ERROR");
  //     return null;
  //   }
  // }

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   fetchBlog().then((response) => {
  //     setState(response);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, [router.isReady])

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

export default blog;
