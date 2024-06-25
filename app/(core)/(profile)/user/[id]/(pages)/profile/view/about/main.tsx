import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { EditProfileModal } from '@/(core)/(profile)/user/[id]/(pages)/profile/(modals)/profile/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { borderFx, glassFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForProfilePage } from '../../page';
import { ProfileAboutBackAction } from './action/back/main';
import { ProfileAboutConnectAction } from './action/connect/main';
import { ProfileAboutEditAction } from './action/edit/main';
import { ProfileAboutBio } from './bio/main';
import { ProfileAboutDetails } from './details/main';
import { ProfileAboutFollowing } from './following/main';
import { ProfileAboutHorizons } from './horizons/main';

export function ProfileAbout() {
  const { admin } = useContext(ContextForProfilePage);
  const openableController = useControllerForOpenable();

  return (
    <>
      <div className='z-50'>
        <ContextForOpenable.Provider value={openableController}>
          <EditProfileModal />
        </ContextForOpenable.Provider>
      </div>
      <GlassWindowFrame
        className='h-full flex-shrink-0 p-[2rem]'
        borderFx={borderFx['border-r']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col items-center space-y-[1.5rem]'>
          <ProfileAboutDetails />
          <ProfileAboutFollowing />
          {admin ? (
            <ProfileAboutEditAction onClick={openableController.open} />
          ) : (
            <div className='flex w-full flex-col space-y-[1rem]'>
              <ProfileAboutConnectAction />
              <ProfileAboutBackAction />
            </div>
          )}
          <HorizontalDivider />
          <ProfileAboutBio />
          <HorizontalDivider />
          {/* <ProfileAboutSupporting /> */}
          <ProfileAboutHorizons />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
