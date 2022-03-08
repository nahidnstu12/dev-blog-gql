import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";
export default function Categories() {
  return (
    <div className={styles.widget_post}>
      <header>
        <h3>Categories</h3>
      </header>
      <div className={styles.categories_wrapper}>
        <CategoryItem />
      </div>
    </div>
  );
}

export const CategoryItem = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  return categories.map((category, i) => (
    <Link key={i} href={`/category/${category.slug}`}>
      {category.name}
    </Link>
  ));
};
