import Link from "next/link";

const NotfoundPage = () => {
  return (
    <>
      <h2>Not Found Page</h2>
      <p>Sorry, the page you are looking for cannot be found.</p>
      <Link href='/'>Return Home</Link>
    </>
  );
};

export default NotfoundPage;
