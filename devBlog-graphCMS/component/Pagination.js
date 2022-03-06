import React from 'react'
import styles from "../styles/Home.module.scss";
export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <a href="#">
        <img src="/left.png" alt="" />
      </a>
      <a href="" className={styles.active}>
        {" "}
        1
      </a>
      <a href="">2</a>
      <a href="">3</a>
      <a href="">4</a>
      <a href="#">
        <img src="/right.png" alt="" />
      </a>
    </div>
  );
}
