import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { FlowHeader } from './header/main';
import { FlowMoments } from './moments/main';
import { FlowMoment } from './moments/moment/main';
import { useContext } from 'react';
import { FlowContext } from '../../page';

export function FlowPage() {
  const { moments, chapters } = useContext(FlowContext);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={FlowPage.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <FlowHeader />
        <FlowMoments>
          {moments.map((moment, index) => (
            <FlowMoment moment={moment} index={index}></FlowMoment>
          ))}
        </FlowMoments>
      </Layer>
    </div>
  );
}
