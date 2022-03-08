import styles from "../styles/Home.module.scss";
import Link from "next/link"
import { CategoryItem } from "./Categories";
export default function Header() {
  return (
    <div className={styles.site_section}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <h2>Dev Blog</h2>
          </Link>
        </div>
        <div className={styles.menu}>
          <CategoryItem />
        </div>
        <div className={styles.mobile_menu}>
          <img src="/menu.png" alt="" />
        </div>
      </nav>
    </div>
  );
}
