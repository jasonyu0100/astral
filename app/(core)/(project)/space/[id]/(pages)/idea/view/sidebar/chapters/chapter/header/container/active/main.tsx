import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/ui/(glass)/window/main';
import { GlassWindowPane } from '@/ui/(glass)/window/pane/main';
import { SpaceIdeaSidebarChapter } from '../../../main';

export function SpaceIdeaContainerActive({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={SpaceIdeaSidebarChapter.name}
      className='mb-[1rem]'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-sm']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
        {children}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
