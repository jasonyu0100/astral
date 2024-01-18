import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function FlowMoments({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <Layer
        displayName={FlowMoments.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']} p-[3rem] overflow-auto`}
      >
        {children}
      </Layer>
    </div>
  );
}
