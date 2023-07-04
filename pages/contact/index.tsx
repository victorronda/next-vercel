import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Contact() {
  return (
    <>
      <MainLayout>
        <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/">Home Page</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact.tsx</code>
        </p>
      </MainLayout>
    </>
  );
}
