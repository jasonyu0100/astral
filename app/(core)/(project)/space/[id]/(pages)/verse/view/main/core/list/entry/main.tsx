import { SpaceVerseDescriptionBody } from './description/body/main';
import { SpaceVerseDescriptionInfo } from './description/info/main';
import { SpaceVerseEntryDescription } from './description/main';
import { SpaceVerseEntryDivider } from './divider/main';
import { SpaveVerseEntryResource } from './resource/main';

export function SpaceVerseListEntry() {
  return (
    <div className='flex w-full flex-col items-center space-y-[3rem] py-[2rem]'>
      <div className='flex w-full flex-row items-center justify-center space-x-[100px]'>
        <SpaveVerseEntryResource />
        <SpaceVerseEntryDescription>
          <SpaceVerseDescriptionInfo />
          <SpaceVerseDescriptionBody></SpaceVerseDescriptionBody>
        </SpaceVerseEntryDescription>
      </div>
      <SpaceVerseEntryDivider />
    </div>
  );
}
