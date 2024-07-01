import { SpaceVersesContentInput } from './input/main';
import { SpaceVersesContentList } from './list/main';

export function SpaceVersesContentComments() {
  return (
    <div className='flex w-full max-w-[800px] flex-col space-y-[2rem]'>
      <SpaceVersesContentInput />
      <SpaceVersesContentList />
    </div>
  );
}
