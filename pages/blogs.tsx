import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/link";
import axios from "axios";
import * as fs from "fs"


// SERVER SIDE RENDERING
// export async function getServerSideProps(context: any) {
//   const response = await axios.get("http://localhost:8000/api/blogs-api");
//   const data = response.data;
//   return {
//     props: {
//       data
//     },
//   }
// }

// STATIC RENDERING
export const getStaticProps = (async (context: any) => {
  let blogs: Object[] = [];
  try {
    let files = await fs.promises.readdir("blogData");
    for (let i = 0; i < files.length; i++) {
      const item = files[i];
      let blogContent = await fs.promises.readFile(`blogData/${item}`, "utf-8");
      let blog = JSON.parse(blogContent);

      blogs.push(blog);
    }
    // res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    // res.status(500).json({ error: "Internal Server Error" });
  }  
  return {
    props: {
      blogs
    },
  }
})

const Blogs = (props: any) => {
  const [state, setState] = useState<any[]>(props.blogs);// injecting props into the state

  // const fetchBlogs = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/blogs-api");
  //     return response.data;
  //   } catch (error) {
  //     console.log("INTERNAL SERVER ERROR");
  //     return null;
  //   }
  // };
  // useEffect(() => {
  //   fetchBlogs().then((responseData) => {
  //     if (responseData) {
  //       setState(responseData);
  //     } else {
  //       console.log("NULL RECEIVED");
  //     }
  //   }).catch((error) => {
  //     console.log(error);
  //   })

  // }, [])
  return (

    <div className={styles.blogs}>
      {/* <div className="spinner"></div> */}
      <h2>Blogs</h2>
      {state &&
        state.map((blog: any) => {
          return (
            <div className={styles.blogItem} key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`} style={{ color: "black", "textDecoration": "none" }}>
                <h3>{blog.title}</h3>
              </Link>
              <p className={styles.description}>
                {blog.content.substr(0, 200)} ......
              </p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Blogs;
