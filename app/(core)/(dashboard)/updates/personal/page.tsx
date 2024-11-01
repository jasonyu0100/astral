'use client';
import protectedUnderAstralAuth from '@/utils/isAuth';

function Page() {
  return (
    <>
      <p className='font-bold text-slate-300'>HHello world</p>
    </>
  );
}

export default protectedUnderAstralAuth(Page);
