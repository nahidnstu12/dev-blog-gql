import styles from "../styles/Home.module.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
// import { grpahCMSImageLoader } from "../util";
import { getSimilarPosts, getRecentPosts } from "../services";
export default function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);
  return (
    <div className={styles.widget_post}>
      <header>
        <h3>{slug ? "Related Posts" : "Recent Posts"}</h3>
      </header>
      {relatedPosts.map((post) => (
        <div className={styles.wrapper} key={post.slug}>
          <Link href={`/post/${post.slug}`} className="text-md">
            <>
              <div className={styles.thumb}>
                <img src={post.featuredImage.url} alt="post widgets" />
              </div>
              <div className={styles.content}>
                <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>

                <h4>{post.title}</h4>

                <a href="#">8 Comments</a>
              </div>
            </>
          </Link>
        </div>
      ))}
    </div>
  );
}
