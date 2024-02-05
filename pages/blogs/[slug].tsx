import React from 'react';
import {useRouter} from "next/router";

const blogs = () => {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div>{slug}</div>
  )
}

export default blogs;