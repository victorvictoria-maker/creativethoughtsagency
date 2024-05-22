"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDatabase } from "./utils";
import PostUser from "@/components/postuser/PostUser";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);
  //   console.log(title, desc, userId, slug);

  try {
    connectToDatabase();
    const newPost = new Post({
      title,
      desc,
      // img,
      userId,
      slug,
    });

    await newPost.save();
    console.log("New post saved to database");

    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong while trying to create a new post" };
  }

  console.log("Using server");
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  //   console.log(title, desc, userId, slug);

  try {
    connectToDatabase();

    await Post.findByIdAndDelete(id);
    console.log("Deleted post from database");

    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong while trying to create a new post" };
  }

  console.log("Using server");
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleGithubLogout = async () => {
  "use server";

  await signOut();
};
