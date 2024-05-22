import { handleGithubLogin, loginWithCredentials } from "@/lib/action";
// import { auth } from "@/lib/auth";

const LoginPage = async () => {
  // const session = await auth();

  // console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={loginWithCredentials}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
