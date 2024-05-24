export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      // by returning just false, it keeps redirecting to the login page
      //   return false;
      //   to add the user details or information into the session as getting only auth when the user logs in using credentials returns only email.
      // console.log(auth);
      // return true;

      const user = auth?.user;
      const isGoingToAdminPage = request.nextUrl?.pathname.startsWith("/admin");
      const isGoingToBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isGoingToLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isGoingToAdminPage && !user?.isAdmin) {
        // redirect to the login page
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isGoingToBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isGoingToLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
