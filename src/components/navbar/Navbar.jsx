import Link from "next/link";
import styles from "./navbar.module.css";
import Navlink from "./Navlink/Navlink";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  let session = await auth();
  console.log(session);

  return (
    <nav className={styles.container}>
      <Link href='/'>
        <h1 className={styles.logo}>Larma</h1>
      </Link>
      <Navlink session={session} />
    </nav>
  );
};

export default Navbar;
