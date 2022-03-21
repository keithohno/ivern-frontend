import type { NextPage } from "next";
import Link from "next/link";
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
        <p>
          <Link href="/profile">
            <a>PROFILE</a>
          </Link>
        </p>
        <p>
          <Link href="/login">
            <a>LOGIN</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
