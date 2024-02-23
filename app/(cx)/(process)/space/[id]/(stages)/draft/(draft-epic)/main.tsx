import { Glass } from '@/(components)/layer/main';
import { containerStyles } from '@/(components)/styles/data';
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
