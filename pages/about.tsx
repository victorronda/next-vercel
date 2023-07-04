import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        {/* Ir a <a href="/">Home Page</a> */}
        Ir a <Link href="/">Home Page</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
