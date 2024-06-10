import { ExplorerEditResourceModal } from '@/(core)/(dashboard)/archive/(pages)/explorer/(modals)/edit/resource/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { DivInputProps } from '@/(types)/props/main';
import { useContext } from 'react';

export function CollectionResourceInfo({ ...props} : DivInputProps) {
  const resource = useContext(ContextForCollectionResourceObj);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerEditResourceModal />
      </ContextForOpenable.Provider>
      <div className={`h-full w-full overflow-auto p-[10px] ${props.className}`}>
        <div className='w-full flex-col space-y-[1rem]'>
          <button
            className='mt-aut mt-auto w-full bg-black p-[0.5rem] font-bold text-slate-300 rounded'
            onClick={() => openableController.open()}
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
