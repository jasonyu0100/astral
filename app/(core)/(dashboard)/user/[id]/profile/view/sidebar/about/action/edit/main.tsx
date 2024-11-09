import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForUserProfileModals } from '../../../../../modals/controller/main';

export function UserProfileAboutEditAction() {
  const ProfileModals = useContext(ContextForUserProfileModals);

  return (
    <>
      <GlassWindowFrame
        className='h-[3rem] w-full flex-shrink-0'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={() => {
            ProfileModals.editProfileModal.open();
          }}
        >
          <p className='font-bold text-slate-300'>Edit Profile</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </>
  );
}
