import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralAddIcon } from '@/icons/add/main';
import {
  exampleFileElement,
  FileElement,
} from '@/server/model/elements/file/main';
import { glassFx, roundedFx } from '@/style/data';
import { useState } from 'react';

export function HorizonsSidebarSquadronsList() {
  const [other, setOther] = useState<FileElement[]>([
    exampleFileElement,
    exampleFileElement,
  ]);

  const indexToLetter = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className='flex w-full flex-shrink-0 flex-col items-center space-y-[2rem] overflow-hidden rounded-full'>
      {other.map((fileElem, index) => (
        <div>
          <GlassWindowFrame
            className='h-[2.5rem] w-[2.5rem]'
            roundedFx={roundedFx['rounded-full']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <p className='font-bold text-slate-300'>{indexToLetter(index)}</p>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          </GlassWindowFrame>
        </div>
      ))}
      <GlassWindowFrame
        className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={() => {
            if (other.length >= 10) {
              alert('You can only add up to 5 members');
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
    </div>
  );
}
