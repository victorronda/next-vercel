import { MainLayout } from '@/components/layouts/MainLayout';
import Link from 'next/link';

export default function Pricing() {
  return (
    <>
      <MainLayout>
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/">Home Page</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/pricing.tsx</code>
        </p>
      </MainLayout>
    </>
  );
}
