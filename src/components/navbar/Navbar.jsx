import Link from "next/link";
import styles from "./navbar.module.css";
import Navlink from "./Navlink/Navlink";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/'>
        <h1 className={styles.logo}>Vicky</h1>
      </Link>
      <Navlink />
    </nav>
  );
};

export default Navbar;
