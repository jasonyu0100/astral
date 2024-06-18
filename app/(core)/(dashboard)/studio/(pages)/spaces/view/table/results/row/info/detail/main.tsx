import { SpaceInfoDetailAuthor } from './author/main';
import { SpaceInfoDetailTitle } from './title/main';

export function SpaceInfoDetail() {
  return (
    <div className='flex w-full flex-col justify-center text-ellipsis'>
      <SpaceInfoDetailAuthor />
      <SpaceInfoDetailTitle />
    </div>
  );
}
