import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';

export function ProfileAboutEditAction({ onClick }: { onClick: () => void }) {
  return (
    <>
      <GlassWindowFrame
        className='h-[3rem] w-full flex-shrink-0'
        roundedFx={roundedFx.rounded}
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={onClick}
        >
          <p className='font-bold text-slate-300'>Edit Profile</p>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </>
  );
}
