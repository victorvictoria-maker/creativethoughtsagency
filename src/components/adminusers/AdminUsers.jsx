import Image from "next/image";
import styles from "./adminusers.module.css";
import { getAllUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getAllUsers();
  return (
    <div className={styles.wrapper}>
      <h1>Users</h1>
      {users.map((eachUser) => {
        return (
          <div className={styles.user} key={eachUser.id}>
            <div className={styles.detail}>
              <Image
                src={eachUser.img ? eachUser.img : "/images/noavatar.png"}
                alt='User Image'
                width={50}
                height={50}
              />
              <span className={styles.title}>{eachUser.username}</span>
            </div>
            <form action={deleteUser}>
              <input type='hidden' name='id' value={eachUser.id} />
              <button className={styles.button}>Delete</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default AdminUsers;
