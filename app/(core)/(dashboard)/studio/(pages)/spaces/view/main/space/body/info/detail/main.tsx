import { SpaceInfoDetailAuthor } from './author/main';
import { SpaceInfoDetailTitle } from './title/main';

export function SpaceInfoDetail() {
  return (
    <div className='flex flex-col justify-center'>
      <SpaceInfoDetailAuthor />
      <SpaceInfoDetailTitle />
    </div>
  );
}
