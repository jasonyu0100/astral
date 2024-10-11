import { exampleFileElem, FileElem } from '@/(server)/model/elements/file/main';
import { AstralAddIcon } from '@/icons/add/main';
import { glassFx, roundedFx } from '@/style/data';
import { UserDisplayPictureElement } from '@/ui/cover/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useState } from 'react';

export function CommonSidebarMinimisedMiscList() {
  const [other, setOther] = useState<FileElem[]>([]);

  return (
    <div className='flex h-full w-full flex-col items-end space-y-[2rem] overflow-auto rounded-full'>
      <GlassWindowFrame
        className='h-[2.5rem] w-[2.5rem] flex-shrink-0'
        roundedFx={roundedFx['rounded-full']}
      >
        <GlassWindowContents
          className='flex h-full w-full cursor-pointer items-center justify-center'
          onClick={() => {
            setOther([...other, exampleFileElem]);
          }}
        >
          <AstralAddIcon />
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-10']} />
      </GlassWindowFrame>
      {other.map((fileElem) => (
        <div>
          <UserDisplayPictureElement fileElem={fileElem} />
        </div>
      ))}
    </div>
  );
}
