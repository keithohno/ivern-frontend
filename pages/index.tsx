import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ivern Signup</title>
      </Head>

      <main>
        <p className={styles.title}>HI</p>
      </main>
    </div>
  );
};

export default Home;
