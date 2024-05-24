"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./adminpostform.module.css";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.wrapper}>
      <h1>Add New Post</h1>
      <input type='hidden' name='userId' value={userId} />
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='Slug' />
      <input type='text' name='img' placeholder='Image' />
      <textarea
        name='desc'
        id='desc'
        placeholder='Description'
        rows={10}
      ></textarea>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminPostForm;
