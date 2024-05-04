import { useContext } from 'react';
import { DraftSidebarEntry } from './entry/main';
import { MomentContext } from '@/(types)/model/journal/moment/main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';

export function DraftSidebarSection() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const moments = momentsHandler.moments;

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <DraftSidebarEntry key={moment.id}/>
        </MomentContext.Provider>
      ))}
    </div>
  );
}
