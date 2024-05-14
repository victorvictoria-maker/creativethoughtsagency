import EachNavlink from "../EachNavlink/EachNavlink";
import styles from "../navbar.module.css";

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

// temporary data
let session = true;
let isAdmin = true;

const Navlink = () => {
  return (
    <ul className={styles.links}>
      {navitem.map((eachNavItem) => (
        <EachNavlink key={eachNavItem.title} eachNavItem={eachNavItem} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <EachNavlink eachNavItem={{ title: "Admin", path: "/admin" }} />
          )}
          <button className={styles.logoutBtn}>Logout</button>
        </>
      ) : (
        <EachNavlink eachNavItem={{ title: "Login", path: "/login" }} />
      )}
    </ul>
  );
};

export default Navlink;
