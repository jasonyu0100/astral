'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonArcGridItem } from './view/core/grid/item/main';
import { HorizonArcView } from './view/main';
import { HorizonArcSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonArcView>
      <HorizonArcSidebar />
      <div className='h-full flex-grow overflow-hidden p-[2rem]'>
        <div className='grid w-full grid-cols-4 gap-[2rem]'>
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
          <HorizonArcGridItem />
        </div>
      </div>
    </HorizonArcView>
  );
}

export default protectedUnderAstralAuth(Page);
