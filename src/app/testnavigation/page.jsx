"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("clicked");
    // router.push("/");
    // router.replace("/");
    // router.refresh();
    router.back();
  };
  return (
    <div>
      <Link href='/'>Go Home</Link>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default Page;
