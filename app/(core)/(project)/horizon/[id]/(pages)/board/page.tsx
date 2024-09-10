'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTempView } from './view/main';
import { HorizonTempSidebar } from './view/sidebar/main';

function Page() {
  return (
    <>
      <HorizonTempView>
        <div className='h-full flex-grow p-[2rem]'>
          <p className='font-bold text-slate-300'>Title - Progress</p>
          <p className='font-bold text-slate-300'>Algo - 3D to 2D</p>
        </div>
        <HorizonTempSidebar />
      </HorizonTempView>
    </>
  );
}

export default protectedUnderAstralAuth(Page);
