import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { borderFx } from '@/style/data';

export function HorizonsHorizonListRow() {
  return (
    <GlassWindowFrame
      className='w-full pt-[2rem]'
      borderFx={borderFx['border-t']}
    >
      <GlassWindowContents className='flex flex-col items-center space-y-[1rem]'>
        <UserComment />
        <UserComment />
        <UserComment />
      </GlassWindowContents>
    </GlassWindowFrame>
  );
}

export function UserComment() {
  return (
    <div className='flex w-full flex-row justify-between'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <UserDisplayPictureElement fileElem={exampleFileElement} />
        <p className='font-bold text-slate-300'>John Smith</p>
        <p className='font-bold text-slate-300'>-</p>
        <p className='font-bold text-slate-300'>
          Looking good, just needs a little work
        </p>
      </div>
    </div>
  );
}
