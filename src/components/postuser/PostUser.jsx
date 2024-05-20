import styles from "./postuser.module.css";

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {}
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <div className={styles.detailtext}>
      <span className={styles.detailtitle}>Author</span>
      <span className={styles.detailvalue}>{user.username}</span>
    </div>
  );
};

export default PostUser;
