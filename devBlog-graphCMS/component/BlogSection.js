import React from "react";
import styles from "../styles/Home.module.scss";
import Categories from "./Categories";
import Pagination from "./Pagination";
import PostCard from "./PostCard";
import PostWidget from "./PostWidget";

export default function BlogSection({posts}) {
  return (
    <div className={styles.site_section}>
      <main className={styles.main}>
        <div className={styles.blog_section}>
          <div className={styles.blog_post_section}>
            {posts.map((post, i) => (
              <PostCard key={i} post={post.node} />
            ))}
          </div>

          {/* <Pagination /> */}
        </div>
        <aside>
          
          <PostWidget  />

          
          <Categories />
        </aside>
      </main>
    </div>
  );
}
