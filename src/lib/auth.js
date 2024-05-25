import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const loginCredentails = async (credentials) => {
  try {
    connectToDatabase();

    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("Wrong username");
    }

    const passwordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!passwordCorrect) {
      throw new Error("Wrong password");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login user with credentials");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await loginCredentails(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //   console.log(user, account, profile);
      if (account.provider === "github") {
        connectToDatabase();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },
    ...authConfig.callbacks,
  },
});
