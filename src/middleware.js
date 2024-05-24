import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // matcher is used so the middle ware does not run on a routes - in this example, it would exclude static and api call routes
  matcher: ["/((?!api[static].*\\..*|_next).*)"],
};
