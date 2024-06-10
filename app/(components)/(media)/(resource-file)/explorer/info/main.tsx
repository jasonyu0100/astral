import { ExplorerEditResourceModal } from '@/(core)/(dashboard)/archive/(pages)/explorer/(modals)/edit/resource/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';

export function CollectionResourceInfo() {
  const resource = useContext(ContextForCollectionResourceObj);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerEditResourceModal />
      </ContextForOpenable.Provider>
      <div className='flex h-full w-full flex-col'>
        <p className='font-extraBold text-2xl text-slate-500'>
          {resource.title}
        </p>
        <p className='text-lg font-bold text-slate-400'>
          {resource?.fileElem?.ext}
        </p>
        <p className='text-md mt-[1rem] font-light text-slate-400'>
          {resource.description}
        </p>
        <button
          className='mt-auto w-full bg-black p-[1rem] font-bold text-slate-300'
          onClick={() => openableController.open()}
        >
          EDIT
        </button>
      </div>
    </>
  );
}
