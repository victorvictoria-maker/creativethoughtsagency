import EachPost from "@/components/eachpost/EachPost";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
  const posts = await getData();

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
