import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftCore } from './core/main';
import { DraftChapters } from './chapters/main';

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
