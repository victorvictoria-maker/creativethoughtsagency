import Image from "next/image";
import styles from "./eachpost.module.css";
import Link from "next/link";

const EachPost = ({ post }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topsection}>
        {post.img && (
          <div className={styles.image}>
            <Image src={post.img} alt='post image' fill />
          </div>
        )}
        <span className={styles.date}>
          {" "}
          {post.createdAt.toString().slice(4, 16)}
        </span>
      </div>

      <div className={styles.bottomsection}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default EachPost;
