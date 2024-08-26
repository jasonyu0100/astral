'use client';

import isAstralAuth from '@/(utils)/isAuth';
import { HorizonChartView } from './view/main';
import { HorizonChartSidebar } from './view/sidebar/main';

function Page() {
  return (
    <>
      <HorizonChartView>
        <div className='flex h-full w-full flex-col'>
          <div className='h-full flex-grow overflow-auto'></div>
        </div>
        <HorizonChartSidebar />
      </HorizonChartView>
    </>
  );
}

export default isAstralAuth(Page);
