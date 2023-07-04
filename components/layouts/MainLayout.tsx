import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';
import { FC } from 'react';

export const MainLayout: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home - Victor</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
