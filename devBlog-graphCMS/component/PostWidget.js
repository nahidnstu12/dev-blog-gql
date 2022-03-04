import styles from "../styles/Home.module.scss";
export default function PostWidget() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thumb}>
        <img src="/blog1.png" alt="post widgets" />
      </div>
      <div className={styles.content}>
        <span>Progamming - 22/02/22</span>
        <h4>State of Frontend 2022</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          eaque?...
        </p>
        <a href="#">8 Comments</a>
      </div>
    </div>
  );
}
