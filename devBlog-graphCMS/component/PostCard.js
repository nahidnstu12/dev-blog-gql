import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { subExcerpt } from "../services/utils";

export default function PostCard({ post }) {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_post}>
        <div className={styles.thumbnail}>
          <img src={post.featuredImage.url} alt="post cards img" />
        </div>
        <div className={styles.blog_content}>
          <div className={styles.authorImg}>
            <img src={post.author.photo.url} alt="author img" />
            <p>
              {post.author?.name}{" "}
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </p>
          </div>

          <h3>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{subExcerpt(post.excerpt)}</p>
          <Link href={`/post/${post.slug}`}>Read More</Link>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </div>
  );
}
