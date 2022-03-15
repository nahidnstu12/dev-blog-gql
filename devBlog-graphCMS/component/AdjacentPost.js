import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { getAdjacentPosts } from "../services";
import { subExcerpt } from "../services/utils";

export default function AdjacentPost({ createdAt, slug }) {
  const [adjacentPost, setAdjacentPost] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result);
      setDataLoaded(true);
    });
  }, [slug]);
  console.log(adjacentPost);
  return (
    <div className={styles.adjacent}>
      {adjacentPost?.previous && (
        <div className={styles.block_post}>
          <img src="/left.png" alt="" />
          <Link href={`/post/${adjacentPost.previous.slug}`}>
            <h3>{subExcerpt(adjacentPost.previous.title, 30)}</h3>
          </Link>
        </div>
      )}
      {adjacentPost?.next && (
        <div className={styles.block_post}>
          <Link href={`/post/${adjacentPost.next.slug}`}>
            <h3>{subExcerpt(adjacentPost.next.title, 40)}</h3>
          </Link>
          <img src="/right.png" alt="" />
        </div>
      )}
    </div>
  );
}
