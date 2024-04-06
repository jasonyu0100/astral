import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, roundedFx, glassFx } from '@/(design)/(fx)/data';
import { StormChapter } from '../../../main';

export function ActiveChapterHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlassWindowFrame
      name={StormChapter.name}
      className='relative my-2'
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
