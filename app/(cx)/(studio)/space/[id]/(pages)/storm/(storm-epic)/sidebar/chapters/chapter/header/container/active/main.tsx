import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(fx)/data';
import { StormChapter } from '../../../main';

export function ActiveChapterHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={StormChapter.name}
      className='relative my-[1rem]'
      borderFx={borderFx['border-all']}
      roundedFx={roundedFx['rounded-sm']}
    >
      <GlassWindowContents className='flex w-full flex-col space-y-[1rem] px-[1rem] py-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>{children}</div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
