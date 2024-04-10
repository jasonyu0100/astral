'use client';

import insideVerse from '@/(logic)/utils/isAuth';
import { LogView } from './view';
import { LogSidebar } from './(origin-epic)/sidebar/main';

function Page() {
  return (
    <>
      <LogView>
        <div className='flex h-full w-full flex-row'>
        </div>
        <LogSidebar/>
      </LogView>
    </>
  );
}

export default insideVerse(Page);
