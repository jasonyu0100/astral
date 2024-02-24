import { Glass } from '@/(components)/glass/main';
import { backgroundStyles } from '@/(components)/styles/data';
import { DraftChaptersLeftButton } from './left/main';
import { DraftChaptersRightButton } from './right/main';
import { DraftChaptersRow } from './row/main';

export function DraftChapters() {
  return (
    <Glass
      displayName={DraftChapters.name}
      sizeStyle='w-full h-[80px]'
      backgroundStyle={backgroundStyles['glass-5']}
      className='flex h-full w-full flex-row items-center justify-center space-x-[1rem] px-[1rem]'
    >
      <DraftChaptersLeftButton />
      <DraftChaptersRow />
      <DraftChaptersRightButton />
    </Glass>
  );
}
