import Image from "next/image";
import style from "./about.module.css";

export const metadata = {
  title: "About Page ",
  description: "Creative Thoughts Agency Webpage is here to give you the best",
};

const AboutPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <h2 className={style.subtitle}>About Agency</h2>
        <h1 className={style.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={style.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. We&apos;re
          world&apos;s Our Special Team best consulting $ finance solution
          provider. Wide range of web and software development services.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={style.image}>
        <Image src='/images/about.png' alt='About image' fill />
      </div>
    </div>
  );
};

export default AboutPage;
