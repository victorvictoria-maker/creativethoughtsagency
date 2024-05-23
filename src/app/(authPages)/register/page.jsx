import styles from "./register.module.css";
import Registerform from "@/components/registerform/registerform";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Registerform />
      </div>
    </div>
  );
};

export default RegisterPage;
