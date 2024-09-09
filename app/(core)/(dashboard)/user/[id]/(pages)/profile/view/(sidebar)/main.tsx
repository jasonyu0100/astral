import { borderFx, glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { UserProfileAbout } from './about/main';

export function UserProfileSidebar() {
  return (
    <>
      <GlassWindowFrame
        className='h-full flex-shrink-0 p-[2rem]'
        borderFx={borderFx['border-r']}
      >
        <GlassWindowContents className='flex h-full w-full flex-col items-center space-y-[1.5rem]'>
          <UserProfileAbout />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </>
  );
}
