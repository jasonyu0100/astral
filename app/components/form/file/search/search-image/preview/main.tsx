import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import { FileElement } from '@/server/model/elements/file/main';
import { borderFx, glassFx } from '@/style/data';
import { useContext } from 'react';

export function SearchImagePreview() {
  const { fileElem: file, updateFileElem: onChange } = useContext(
    ContextForFileChangable,
  );

  return (
    <GlassWindowFrame borderFx={borderFx['border-around']}>
      <GlassWindowContents
        className='cursor-pointer'
        onClick={() => onChange({} as FileElement)}
      >
        <div className='flex h-full w-full flex-row items-center justify-between pr-[2rem]'>
          {file?.src && (
            <img
              className='aspect-square h-[6rem] w-[6rem] flex-shrink-0 bg-black object-cover'
              src={file?.src}
            />
          )}
          {file?.src && (
            <div className='ml-[2rem] flex flex-grow flex-col space-y-[0.5rem]'>
              <p className='text-lg font-light capitalize text-slate-500'>
                {file?.title}
              </p>
            </div>
          )}
          <AstralCloseIcon />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
