import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileTextTab } from './text-tab/main';

export function UserProfileFooter() {
  const profileController = useContext(ContextForProfile);

  return (
    <GlassWindowFrame className='h-[4rem] w-full'>
      <GlassWindowContents className='grid w-full grid-cols-2 items-center justify-items-center'>
        {Object.values(ProfilePage).map((page) => (
          <GlassWindowFrame key={page} className='h-full w-full'>
            <UserProfileTextTab
              active={profileController.state.page === page}
              onClick={() => profileController.actions.updatePage(page)}
            >
              {page}
            </UserProfileTextTab>
            {profileController.state.page === page && (
              <GlassWindowPane glassFx={glassFx['glass-10']} />
            )}
          </GlassWindowFrame>
        ))}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
