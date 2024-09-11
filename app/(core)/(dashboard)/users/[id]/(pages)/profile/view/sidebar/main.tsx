import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForUserProfile } from '../../controller/main';
import { UserProfileAbout } from './about/main';
import { UserProfileAdminIndicator } from './admin-indicator/main';

export function UserProfileSidebar() {
  const {
    state: { adminMode },
  } = useContext(ContextForUserProfile);

  return (
    <GlassWindowFrame className='h-full flex-shrink-0'>
      <GlassWindowContents className='flex h-full w-full flex-col'>
        <UserProfileAbout />
        {adminMode && <UserProfileAdminIndicator />}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
