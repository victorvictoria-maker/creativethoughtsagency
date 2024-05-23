"use client";

import { loginWithCredentials } from "@/lib/action";
import { useFormState } from "react-dom";
import styles from "./loginform.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Loginform = () => {
  const [state, formAction] = useFormState(loginWithCredentials, undefined);

  // const router = useRouter();

  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='Username' name='username' />
      <input type='password' placeholder='Password' name='password' />
      <button>Login </button>
      {state?.error}

      <Link href='/register'>
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default Loginform;
