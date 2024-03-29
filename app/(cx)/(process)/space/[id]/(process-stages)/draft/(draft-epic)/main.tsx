import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftCore } from './core/main';
import { DraftChapters } from './chapters/main';

export function DraftMain() {
  return (
    <GlassAreaContainer
      name={DraftMain.name}
      size='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <DraftCore />
      <DraftChapters />
    </GlassAreaContainer>
  );
}
