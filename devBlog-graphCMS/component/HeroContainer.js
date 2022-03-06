import styles from "../styles/Home.module.scss";
export default function HeroContainer() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.contentBx}>
          <span>Developing Posts Collection - 21/02/2022</span>
          <h1>Join us to know about the benefits from hundred developers</h1>
        </div>
      </div>
    </section>
  );
}
