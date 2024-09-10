'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonTempView } from './view/main';
import { HorizonTempSidebar } from './view/sidebar/main';

function Page() {
  return (
    <>
      <HorizonTempView>
        <div className='flex h-full w-full flex-col'>
          <div className='h-full flex-grow overflow-auto'></div>
        </div>
        <HorizonTempSidebar />
      </HorizonTempView>
    </>
  );
}

export default protectedUnderAstralAuth(Page);
