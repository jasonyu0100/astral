import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(design)/(fx)/data';
import { DraftBody } from './body/main';
import { DraftHeader } from './header/main';

export function DraftCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={DraftCore.name}
        sizeFx='w-full h-full'
        className={`${containerFx['col']}`}
      >
        <DraftHeader />
        <DraftBody />
      </GlassAreaContainer>
    </div>
  );
}
