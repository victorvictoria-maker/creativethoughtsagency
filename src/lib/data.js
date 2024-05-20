import { Post, User } from "./models";
import { connectToDatabase } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getAllPosts = async () => {
  try {
    connectToDatabase();
    const posts = Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting all posts from database!", error);
  }
};

export const getAPost = async (slug) => {
  try {
    connectToDatabase();
    const post = Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting this post from database!", error);
  }
};

export const getAUser = async (id) => {
  // to stop catching
  noStore();

  try {
    connectToDatabase();
    const user = User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user from database!", error);
  }
};

export const getAllUsers = async () => {
  try {
    connectToDatabase();
    const users = User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting all users from database!", error);
  }
};
