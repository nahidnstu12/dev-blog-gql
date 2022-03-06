import styles from "../styles/Home.module.scss"
export default function Header() {
  return (
    <div className={styles.site_section}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Dev Blog</div>
        <div className={styles.menu}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.mobile_menu}>
          <img src="/assets/devImg/menu.png" alt="" />
        </div>
      </nav>
    </div>
  );
}
