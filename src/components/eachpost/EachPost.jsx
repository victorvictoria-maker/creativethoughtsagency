import Image from "next/image";
import styles from "./eachpost.module.css";
import Link from "next/link";

const EachPost = ({ post }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topsection}>
        <div className={styles.image}>
          <Image src='/images/contact.png' alt='post image' fill />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>

      <div className={styles.bottomsection}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default EachPost;
