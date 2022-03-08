import React from 'react'
import styles from "../styles/Home.module.scss";
import moment from "moment";
export default function AuthorCard({author}) {
  return (
    <div className={styles.widget_post}>
      <div className={styles.top}>
        <img src={author.photo.url} alt="" />
        <h3>{author.name}</h3>
      </div>
      <div className={styles.bio}>{author.bio}</div>
      <div className={styles.bottom}>
        Joined <span>{moment(author.createdAt).format("MMM DD, YYYY")}</span>
      </div>
    </div>
  );
}
