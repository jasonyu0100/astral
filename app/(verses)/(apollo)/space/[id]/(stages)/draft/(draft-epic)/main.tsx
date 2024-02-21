import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { DraftChapters } from './chapters/main';
import { DraftPage } from './page/main';

export function DraftMain() {
  return (
    <Glass
      displayName={DraftMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <DraftPage />
      <DraftChapters />
    </Glass>
  );
}
