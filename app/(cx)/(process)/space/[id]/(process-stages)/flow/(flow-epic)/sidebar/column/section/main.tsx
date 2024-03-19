import { useContext } from 'react';
import { FlowSidebarEntry } from './entry/main';
import { MomentContext } from '@/(logic)/internal/model/flow/moment/main';
import { MomentsHandlerContext } from '@/(logic)/internal/handler/flow/moments/main';

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
