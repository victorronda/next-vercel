import { Inter } from 'next/font/google';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>

        <h1 className={'title'}>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/about">About</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.tsx</code>
        </p>
      </MainLayout>
    </>
  );
}
