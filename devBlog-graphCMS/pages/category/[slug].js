import Head from "next/head";
// import styles from "../styles/Home.module.scss";
import BlogSection from "../../component/BlogSection";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";

export default function Category({ posts }) {
    const router = useRouter();

    if (router.isFallback) {
      return "Loading...";
    }
  console.log(posts);
  return <BlogSection posts={posts} />;
}

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
    revalidate: 10,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
