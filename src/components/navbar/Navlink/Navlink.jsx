"use client";

import { useState } from "react";
import EachNavlink from "../EachNavlink/EachNavlink";
import styles from "../navbar.module.css";
import Image from "next/image";
import { handleGithubLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

let navitem = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Navlink = ({ session }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // let isAdmin = true;

  return (
    <div className='navlink-container'>
      <ul className={styles.links}>
        {navitem.map((eachNavItem) => (
          <EachNavlink key={eachNavItem.title} eachNavItem={eachNavItem} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <EachNavlink eachNavItem={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleGithubLogout}>
              <button className={styles.logoutBtn}>Logout</button>
            </form>
          </>
        ) : (
          <EachNavlink eachNavItem={{ title: "Login", path: "/login" }} />
        )}
      </ul>
      <Image
        src='/images/menu.png'
        alt='Menu'
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setMenuOpen((prev) => !prev)}
      />
      {menuOpen && (
        <ul className={styles.mobileLinks}>
          {navitem.map((eachNavItem) => (
            <EachNavlink key={eachNavItem.title} eachNavItem={eachNavItem} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navlink;
