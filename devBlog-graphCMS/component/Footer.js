import React from "react";
import styles from "../styles/Home.module.scss";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.site_section}>
        <div className={styles.footer_top}>
          <div className={styles.left}>
            <h3>Dev Blogs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              similique ratione a odio? Vitae perspiciatis eligendi non aut
              molestiae sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              similique ratione a odio? Vitae perspiciatis eligendi non aut
              molestiae sunt.
            </p>
          </div>
          <div className={styles.center}>
            <h3>Recent Posts</h3>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
            <a href="#">
              <p>Functional Programming And Programming Paradigms in Java</p>
            </a>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
            <a href="#">
              <p>Functional Programming And Programming</p>
            </a>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
          </div>
          <div className={styles.right}>
            <h3>Recent Comments</h3>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
            <a href="#">
              <p>Functional Programming And Programming Paradigms in Java</p>
            </a>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
            <a href="#">
              <p>Functional Programming And Programming</p>
            </a>
            <a href="#">
              <p>State of Frontend 2022</p>
            </a>
          </div>
        </div>
        <hr />
        <div className={styles.footer_bottom}>
          <div className={styles.footer_menu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
            <p>Copyrights &copy; 2022 Dev Blogs</p>
          </div>
          <div className={styles.footer_socials}>
            <img src="/fb.png" alt="" />
            <img src="/g+.png" alt="" />
            <img src="/linedin.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
