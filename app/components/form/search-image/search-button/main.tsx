import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { ContextForFileChangable } from '@/logic/contexts/fileChangable/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { borderFx } from '@/style/data';
import { useContext } from 'react';
import SearchImageModal from '../modal/main';

export function SearchButton() {
  const fileChangableController = useContext(ContextForFileChangable);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <SearchImageModal />
      </ContextForOpenable.Provider>
      <GlassWindowFrame
        className='p-[1rem]'
        borderFx={borderFx['border-around']}
      >
        <GlassWindowContents
          className='cursor-pointer p-[1rem]'
          onClick={openableController.open}
        >
          <div className='flex h-full w-full flex-row items-center space-x-[2rem]'>
            <AstralSearchIcon className='h-[2rem] w-[2rem]' />
            <p className='text-md font-light text-slate-500'>
              {fileChangableController?.fileElem?.title === undefined
                ? 'No image selected'
                : fileChangableController?.fileElem?.title}
            </p>
          </div>
        </GlassWindowContents>
      </GlassWindowFrame>
    </>
  );
}
