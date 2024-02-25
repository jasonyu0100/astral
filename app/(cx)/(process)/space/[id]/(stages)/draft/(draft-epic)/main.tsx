import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { DraftChapters } from './chapters/main';
import { DraftCore } from './core/main';

export function DraftMain() {
  return (
    <Glass
      displayName={DraftMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <DraftCore />
      <DraftChapters />
    </Glass>
  );
}
