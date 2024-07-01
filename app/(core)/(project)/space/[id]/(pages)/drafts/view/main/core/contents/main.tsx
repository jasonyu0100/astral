import { SpaceDraftsContentsVerse } from './verse/main';

export function SpaceDraftsCoreContents() {
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center justify-between p-[2rem]'
    >
      {/* <SpaceDraftsActionUp /> */}
      <SpaceDraftsContentsVerse />
      {/* <SpaceDraftsActionDown /> */}
    </div>
  );
}
