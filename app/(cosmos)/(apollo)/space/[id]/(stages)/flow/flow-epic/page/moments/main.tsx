import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { useContext } from 'react';
import { FlowContext } from '../../../page';
import { FlowMoment } from './moment/main';

export function FlowMoments() {
  const { moments } = useContext(FlowContext);
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <Layer
        displayName={FlowMoments.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']} overflow-auto p-[3rem]`}
      >
        {moments.map((moment, index) => (
          <FlowMoment moment={moment} index={index}></FlowMoment>
        ))}
      </Layer>
    </div>
  );
}
