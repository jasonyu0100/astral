import { SpacesSpaceSearchArticlesTab } from './articles/main';
import { SpacesSpaceSearchImageryTab } from './imagery/main';
import { SpacesSpaceSearchMediaTab } from './media/main';
import { SpacesSpaceSearchTextTab } from './text/main';

export function SpacesSpaceConstellationTabs() {
  return (
    <div className='flex flex-row p-[2rem]'>
      <div className='grid w-full grid-cols-5'>
        <SpacesSpaceSearchTextTab />
        <SpacesSpaceSearchArticlesTab />
        <SpacesSpaceSearchImageryTab />
        <SpacesSpaceSearchMediaTab />
      </div>
    </div>
  );
}
