"use client";

import Link from "next/link";
import styles from "../navbar.module.css";
import { usePathname } from "next/navigation";

const EachNavlink = ({ eachNavItem }) => {
  const pathName = usePathname();

  return (
    <Link
      href={eachNavItem.path}
      className={`${styles.eachNavItem} ${
        pathName === eachNavItem.path && styles.active
      }`}
    >
      {eachNavItem.title}
    </Link>
  );
};

export default EachNavlink;
