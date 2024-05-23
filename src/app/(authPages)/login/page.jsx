import Loginform from "@/components/loginform/loginform";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>

        <Loginform />
      </div>
    </div>
  );
};

export default LoginPage;
