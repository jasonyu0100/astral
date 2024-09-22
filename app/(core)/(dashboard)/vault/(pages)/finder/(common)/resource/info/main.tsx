import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { DivInputProps } from '@/props/main';
import { useContext } from 'react';
import { ContextForVaultFinderEditModals } from '../../../(modals)/edit/controller/main';

export function CollectionResourceInfo({ ...props }: DivInputProps) {
  const resource = useContext(ContextForCollectionResourceObj);
  const modalController = useContext(ContextForVaultFinderEditModals);

  return (
    <>
      <div
        className={`h-full w-full overflow-auto p-[10px] ${props.className}`}
      >
        <div className='w-full flex-col space-y-[1rem]'>
          <button
            className='mt-aut mt-auto w-full rounded bg-black p-[0.5rem] font-bold text-slate-300'
            onClick={() => modalController.editResourceController.open()}
          >
            EDIT
          </button>
          <p className='font-extraBold text-sm text-slate-500'>
            {resource.title}
          </p>
          <p className='text-lg font-bold text-slate-400'>
            {resource?.fileElem?.ext}
          </p>
          <p className='text-md mt-[1rem] font-light text-slate-400'>
            {resource.description}
          </p>
        </div>
      </div>
    </>
  );
}
