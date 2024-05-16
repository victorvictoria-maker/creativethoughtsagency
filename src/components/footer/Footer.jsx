import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.logo}>Vicky</h1>
      <p className={style.text}>
        Vicky creative thoughts agency © all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
