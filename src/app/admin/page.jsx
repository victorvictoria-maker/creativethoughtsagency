import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminposts/AdminPosts";
import AdminPostForm from "@/components/adminpostform/AdminPostForm";
import AdminUsers from "@/components/adminusers/AdminUsers";
import AdminUsersForm from "@/components/adminusersform/AdminUsersForm";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.column}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
