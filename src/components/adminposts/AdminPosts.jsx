import { getAllPosts } from "@/lib/data";
import styles from "./adminposts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getAllPosts();

  return (
    <div className={styles.wrapper}>
      <h1>Posts</h1>
      {posts.map((eachPost) => {
        return (
          <div className={styles.post} key={eachPost.id}>
            <div className={styles.detail}>
              <Image
                src={eachPost.img ? eachPost.img : "/images/noavatar.png"}
                alt='Post Image'
                width={50}
                height={50}
              />
              <span className={styles.title}>{eachPost.title}</span>
            </div>
            <form action={deletePost}>
              <input type='hidden' name='id' value={eachPost.id} />
              <button className={styles.button}>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPosts;
