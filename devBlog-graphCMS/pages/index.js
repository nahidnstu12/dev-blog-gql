import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeroContainer from "../component/HeroContainer";
import BlogSection from "../component/BlogSection";
import { getPosts } from "../services";

export default function Home({posts}) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroContainer />
      <BlogSection posts={posts}/>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 10,
  };
}
