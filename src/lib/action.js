"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDatabase } from "./utils";
import PostUser from "@/components/postuser/PostUser";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

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

export const registerUser = async (formData) => {
  const { username, email, password, confirmpassword } =
    Object.fromEntries(formData);

  if (password !== confirmpassword) return "Password does not match";

  try {
    connectToDatabase();

    const user = await User.findOne({ username });
    if (user) {
      return "This username already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("New user saved to database");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong while trying to register a new user",
    };
  }
};

export const loginWithCredentials = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong while trying to login user with credentials",
    };
  }
};
