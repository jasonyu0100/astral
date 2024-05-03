import { useContext } from 'react';
import { FlowSidebarEntry } from './entry/main';
import { MomentContext } from '@/(lgx)/internal/model/journal/moment/main';
import { MomentsHandlerContext } from '@/(lgx)/internal/handler/moments/main';

export function FlowSidebarSection() {
  const momentsHandler = useContext(MomentsHandlerContext);
  const moments = momentsHandler.moments;

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {moments.map((moment) => (
        <MomentContext.Provider value={moment} key={moment.id}>
          <FlowSidebarEntry key={moment.id}/>
        </MomentContext.Provider>
      ))}
    </div>
  );
}
