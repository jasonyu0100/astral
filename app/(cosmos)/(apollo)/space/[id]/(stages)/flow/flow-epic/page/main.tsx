import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';

export function FlowPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={FlowPage.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        {children}
      </Layer>
    </div>
  );
}
