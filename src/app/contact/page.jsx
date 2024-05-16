import Image from "next/image";
import styles from "./contact.module.css";

const Contactpage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src='/images/contact.png' alt='Contact Image' fill />
      </div>
      <div className={styles.formwrapper}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='email' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number (Optional)' />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contactpage;
