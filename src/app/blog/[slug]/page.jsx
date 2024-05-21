import Image from "next/image";
import styles from "./singleblogpage.module.css";
import PostUser from "@/components/postuser/PostUser";
import { Suspense } from "react";
import { getAPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getAPost(slug);

  return {
    title: `${post.title} | Creative Thoughts Agency Blog page`,
    description: post.desc,
  };
};

// FETCHING DATA WITH API
const getData = async (slug) => {
  const res = await fetch(
    `http://localhost:3000/api/blog/${slug}`
    //     {}
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;

  // FETCHING DATA WITH API
  const post = await getData(slug);

  // FETCHING DATA WITHOUT API
  //  const post = await getAPost(slug);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={post?.img} alt='Blog Image' fill />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.details}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailtext}>
            <span className={styles.detailtitle}>Published</span>
            <span className={styles.detailvalue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.detailcontent}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
