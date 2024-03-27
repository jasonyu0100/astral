import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftBody } from './body/main';
import { DraftHeader } from './header/main';

export function DraftCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        displayName={DraftCore.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <DraftHeader />
        <DraftBody />
      </GlassAreaContainer>
    </div>
  );
}
