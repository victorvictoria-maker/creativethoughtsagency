import { Post } from "@/lib/models";
import { connectToDatabase } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDatabase();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch this post while using api");
  }
};

// export const DELETE = async (req, { params }) => {
//   const { slug } = params;
//   try {
//     connectToDatabase();

//     await Post.deleteOne({ slug });
//     return NextResponse.json("Post deleted");
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to delete this post while using api");
//   }
// };
