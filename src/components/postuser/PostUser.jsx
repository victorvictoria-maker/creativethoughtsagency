import { getAUser } from "@/lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

// FETCHING DATA WITH API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {}
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCHING DATA WITH API
  // const user = await getData(userId);

  // FETCHING DATA WITHOUT API
  const user = await getAUser(userId);
  return (
    <div className={styles.details}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/images/noavatar.png"}
        alt='Avatar'
        width={50}
        height={50}
      />
      <div className={styles.detailtext}>
        <span className={styles.detailtitle}>Author</span>
        <span className={styles.detailvalue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
