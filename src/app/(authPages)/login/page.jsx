import { handleGithubLogin } from "@/lib/action";
// import { auth } from "@/lib/auth";

const LoginPage = async () => {
  // const session = await auth();

  // console.log(session);

  return (
    <form action={handleGithubLogin}>
      <button>Login with Github</button>
    </form>
  );
};

export default LoginPage;
