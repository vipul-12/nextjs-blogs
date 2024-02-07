import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/Link";
import axios from "axios";

const Blogs = () => {
  const [state, setState] = useState<any[]>([]);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/blogs-api");
      return response.data;
    } catch (error) {
      console.log("INTERNAL SERVER ERROR");
      return null;
    }
  };

  useEffect(() => {
    fetchBlogs().then((responseData) => {
      if (responseData) {
        setState(responseData);
      } else {
        console.log("NULL RECEIVED");
      }
    }).catch((error) => {
      console.log(error);
    })

  }, [])
  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>

      {state &&
        state.map((blog: any) => {
          return (
            <div className={styles.blogItem} key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`} style={{ color: "black", "textDecoration": "none" }}>
                <h3>{blog.title}</h3>
              </Link>
              <p className={styles.description}>
                {blog.content.substr(0,200)} ......
              </p>
            </div>
          )
        })
      }
    </div>
  );
};

export default Blogs;
