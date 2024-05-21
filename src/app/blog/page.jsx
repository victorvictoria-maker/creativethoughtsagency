import EachPost from "@/components/eachpost/EachPost";
import styles from "./blog.module.css";
import { getAllPosts } from "@/lib/data";

// FETCHING DATA WITH API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    // no catching of the data
    // cache: "no-store",
    // refreshes the data every 1 hour
    // next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  // FETCHING DATA WITH API
  const posts = await getData();

  // FETCHING DATA WITHOUT API
  // const posts = await getAllPosts();

  return (
    <div className={styles.wrapper}>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <EachPost post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
