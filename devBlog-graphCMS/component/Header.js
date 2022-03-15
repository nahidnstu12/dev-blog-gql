import { useState } from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { CategoryItem } from "./Categories";

export default function Header() {
  const [show, setShow] = useState(false);
  const mblMenu = () => {
    setShow(!show);
  };

  return (
    <div className={styles.site_section}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <h2>Dev Blog</h2>
          </Link>
        </div>
        <div className={`${styles.menu} ${show ? styles.show : styles.slideUp}`}>
          <CategoryItem />
        </div>
        <div className={styles.mobile_menu} onClick={mblMenu}>
          <img src="/menu.png" alt="" />
        </div>
      </nav>
    </div>
  );
}
