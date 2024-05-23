"use client";

import { registerUser } from "@/lib/action";
import { useFormState } from "react-dom";

import styles from "./registerform.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const Registerform = () => {
  const [state, formAction] = useFormState(registerUser, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={formAction}>
      <input type='text' placeholder='Username' name='username' />
      <input type='email' placeholder='Email' name='email' />
      <input type='password' placeholder='Password' name='password' />
      <input
        type='password'
        placeholder='Confirm password'
        name='confirmpassword'
      />
      <button>Register</button>

      {state?.error}

      <Link href='/login'>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default Registerform;
