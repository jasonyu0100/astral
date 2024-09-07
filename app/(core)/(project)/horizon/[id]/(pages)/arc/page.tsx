'use client';

import isAstralAuth from '@/utils/isAuth';
import { HorizonArcView } from './view/main';
import { HorizonArcSidebar } from './view/sidebar/main';

function Page() {
  return (
    <>
      <HorizonArcView>
        <div className='flex h-full w-full flex-col'>
          <div className='h-full flex-grow overflow-auto'></div>
        </div>
        <HorizonArcSidebar />
      </HorizonArcView>
    </>
  );
}

export default isAstralAuth(Page);
