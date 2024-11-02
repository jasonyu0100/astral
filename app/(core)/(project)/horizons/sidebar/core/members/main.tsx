import {
  exampleFileElement,
  FileElement,
} from '@/architecture/model/elements/file/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { useState } from 'react';

export function HorizonsSidebarMembersList() {
  const [other, setOther] = useState<FileElement[]>([exampleFileElement]);
  const indexToLetter = (index: number) => String.fromCharCode(65 + index);
  return (
    <div className='flex w-full flex-col items-center space-y-[2rem] rounded-full'>
      <GlassWindowFrame
        className='flex-shrink-0 p-[1rem]'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents className='flex flex-col space-y-[2rem]'>
          <GlassWindowFrame
            className='h-[2.5rem] w-[2.5rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <p className='font-bold text-slate-300'>{indexToLetter(9)}</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
          {other.map((fileElem) => (
            <div>
              <UserDisplayPictureElement fileElem={fileElem} />
            </div>
          ))}
          <GlassWindowFrame
            className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents
              className='flex h-full w-full cursor-pointer items-center justify-center'
              onClick={() => {
                if (other.length >= 4) {
                  alert('You can only add up to 4 members');
                  return;
                } else {
                  setOther([...other, exampleFileElement]);
                }
              }}
            >
              <AstralAddIcon />
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-20']} />
          </GlassWindowFrame>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
    </div>
  );
}
