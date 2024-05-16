import Image from "next/image";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textsection}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius maxime
          reprehenderit fuga quae vero enim quis vel perferendis mollitia.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src='/images/brands.png'
            alt='brands'
            fill
            className={styles.brandsimage}
          />
        </div>
      </div>
      <div className={styles.imagesection}>
        <Image
          src='/images/hero.gif'
          alt='Hero Gif'
          fill
          className={styles.heroimage}
        />
      </div>
    </div>
  );
};

export default HomePage;
