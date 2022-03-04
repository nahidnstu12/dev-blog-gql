import React from 'react'
import styles from "../styles/Home.module.scss";
export default function PostCard() {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_post}>
        <div className={styles.thumbnail}>
          <img src="/blog1.png" alt="post cards img" />
        </div>
        <div className={styles.blog_content}>
          <span>Functional Programming - 12/02/22</span>
          <h3>Functional Programming And Programming Paradigms in Java</h3>
          <p>
            Out of all the above paradigms, we are going to learn about
            Functional programming and why it got introduced in Java 8. We will
            also discuss the topics where object-oriented falls short and how
            functional programming steps in and chimes.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}
