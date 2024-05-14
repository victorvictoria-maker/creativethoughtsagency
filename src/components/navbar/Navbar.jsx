import styles from "./navbar.module.css";
import Navlink from "./Navlink/Navlink";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>Vicky</h1>
      <Navlink />
    </nav>
  );
};

export default Navbar;
