import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftChapters } from './chapters/main';
import { DraftCore } from './core/main';

export function DraftMain() {
  return (
    <GlassContainer
      displayName={DraftMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <DraftCore />
      <DraftChapters />
    </GlassContainer>
  );
}
