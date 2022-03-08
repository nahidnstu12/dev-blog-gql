import { useRouter } from "next/router";
import React from "react";
import AdjacentPost from "../../component/AdjacentPost";
import AuthorCard from "../../component/AuthorCard";
import Categories from "../../component/Categories";
import PostBody from "../../component/PostBody";
import PostWidget from "../../component/PostWidget";
import { getPostDetails, getPosts } from "../../services";
import styles from "../../styles/Home.module.scss";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(post);
  return (
    <div className={styles.site_section}>
      <main className={styles.main}>
        <div className={styles.post_details}>
          <PostBody post={post} />
        </div>
        <aside className={styles.aside}>
          <AuthorCard author={post.author} />
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </aside>
      </main>
      {/* adjacent post */}
      <AdjacentPost slug={post.slug} createdAt={post.createdAt} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let data;
  try {
    data = await getPostDetails(params.slug);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
