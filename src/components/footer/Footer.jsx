import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.logo}>Larma</h1>
      <p className={style.text}>
        Larma creative thoughts agency © all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
