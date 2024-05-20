import Image from "next/image";
import styles from "./singleblogpage.module.css";
import PostUser from "@/components/postuser/PostUser";
import { Suspense } from "react";

const getData = async (slug) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug}`,
    {}
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SingleBlogPage = async ({ params }) => {
  // console.log(params.slug);
  const { slug } = params;

  const post = await getData(slug);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src='/images/about.png' alt='Blog Image' fill />
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            src='/images/contact.png'
            alt='Avatar'
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailtext}>
            <span className={styles.detailtitle}>Published</span>
            <span className={styles.detailvalue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.detailcontent}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
