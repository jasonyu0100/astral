import { useContext } from 'react';
import { FlowContext } from '../../../../page';
import { FlowSidebarEntry } from './entry/main';
import { MomentContext } from '@/(logic)/internal/data/infra/model/flow/moment/main';

export function FlowSidebarSection() {
  const { moments } = useContext(FlowContext);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {moments.map((moment) => (
        // eslint-disable-next-line react/jsx-key
        <MomentContext.Provider value={moment}>
          <FlowSidebarEntry />
        </MomentContext.Provider>
      ))}
    </div>
  );
}
