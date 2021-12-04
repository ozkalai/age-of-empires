import type { NextPage } from "next";
import Image from "next/image";

import styles from "@/styles/pages/Home.module.sass";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.imageWrapper}>
        <Image alt="cover-image" src="/images/age.jpg" layout="fill" objectFit="cover" />
        <div className={styles.name}>
          <Image alt="age-of-empires" src="/images/age.png" width={300} height={180} />
        </div>
      </div>
    </div>
  );
};
export default Home;
