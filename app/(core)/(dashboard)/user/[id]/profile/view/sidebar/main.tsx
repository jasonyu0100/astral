import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx } from '@/style/data';
import { useContext } from 'react';
import { ContextForProfile } from '../../controller/main';
import { UserProfileAbout } from './about/main';

export function UserProfileSidebar() {
  const {
    state: { adminMode },
  } = useContext(ContextForProfile);

  return (
    <GlassWindowFrame className='h-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full flex-col'>
        <UserProfileAbout />
        {/* {adminMode && <ProfileAdminIndicator />} */}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
