import { useControllerForChapterSpotlightListFromUser } from '@/(server)/controller/space/chapter/spotlight/list-from-user';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileOverviewGallery } from './gallery/main';

export function UserProfileOverviewAbout() {
  const profileUser = useContext(ContextForProfileUserObj);
  const spotlightlistController = useControllerForChapterSpotlightListFromUser(
    profileUser.id,
  );

  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      {/* <p className='text-2xl font-bold text-slate-300'>Spotlight</p>
      <HorizontalDivider />
      <GlassWindowFrame className='w-full'>
        <GlassWindowContents className='flex flex-col items-center divide-y-[1px] divide-slate-500 divide-opacity-30'>
          {spotlightlistController.state.objs.map((spotlight, index) => (
            <ContextForIndexable.Provider value={index}>
              <ContextForChapterSpotlightObj.Provider value={spotlight}>
                <UserProfileOverviewSpotlight />
              </ContextForChapterSpotlightObj.Provider>
            </ContextForIndexable.Provider>
          ))}
        </GlassWindowContents>
      </GlassWindowFrame> */}
      <p className='text-2xl font-bold text-slate-300'>Gallery</p>
      <HorizontalDivider />
      <UserProfileOverviewGallery />
    </div>
  );
}
