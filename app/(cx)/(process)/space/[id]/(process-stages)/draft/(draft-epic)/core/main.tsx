import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftBody } from './body/main';
import { DraftHeader } from './header/main';

export function DraftCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassContainer
        displayName={DraftCore.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <DraftHeader />
        <DraftBody />
      </GlassContainer>
    </div>
  );
}
