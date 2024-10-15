import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { AstralEqualizerIcon } from '@/icons/equalizer/main';
import { useContext } from 'react';

export function CollectionResourceAudio() {
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <div className='flex h-full w-full flex-shrink-0 flex-col'>
      <div className='flex aspect-square w-full flex-shrink-0 items-center justify-center bg-slate-950 p-[3rem]'>
        <AstralEqualizerIcon />
      </div>
      <p className='mt-[1rem] w-full text-center font-extraBold text-xl'>
        {resource.title}
      </p>
    </div>
  );
}
