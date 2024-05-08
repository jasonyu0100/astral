import { studioMap } from '@/(core)/(board)/studio/map';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className='font-extraBold text-xl text-white'>
        Your payment settings are pending...{' '}
      </h1>
      <br />
      <Link
        href={studioMap.studio.spaces.link}
        className='font-bold text-blue-500'
      >
        Back Home
      </Link>
    </>
  );
}
