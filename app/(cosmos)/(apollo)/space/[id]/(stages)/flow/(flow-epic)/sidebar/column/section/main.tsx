import { useContext } from 'react';
import { FlowContext } from '../../../../page';
import { FlowSidebarEntry } from './entry/main';

export function FlowSidebarSection() {
  const { moments } = useContext(FlowContext);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      {moments.map((moment) => (
        <FlowSidebarEntry moment={moment} />
      ))}
    </div>
  );
}
