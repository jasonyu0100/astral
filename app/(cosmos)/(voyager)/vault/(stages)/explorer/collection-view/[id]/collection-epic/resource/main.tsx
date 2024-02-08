import { ResourceObj } from '@/tables/resource/main';
import { createContext } from 'react';
import { ResourceImage } from './image/main';
import { Aspect } from '@/(common)/aspect/main';
import { ResourceInfo } from './info/main';
import { useFileModal, FileModalContext } from '@/(cosmos)/(modals)/file-modal/main';
import { FileModalsView } from '@/(cosmos)/(modals)/file-modal/view';

export const FileContext = createContext({} as ResourceObj);

export function CollectionResource({
  resource: resource,
}: {
  resource: ResourceObj;
}) {
  const modalContext = useFileModal();

  return (
    <FileContext.Provider value={resource}>
      <FileModalContext.Provider value={modalContext}>
        <FileModalsView />
        <Aspect x={36} y={16} className='flex h-[150px] flex-row items-center space-x-[3rem]'>
          <ResourceImage 
            src={resource?.file?.src}
            onClick={() => modalContext.editFileModal.open()}
            className='h-full aspect-square cursor-pointer rounded-full'
          />
          <ResourceInfo resource={resource} />
        </Aspect>
      </FileModalContext.Provider>
    </FileContext.Provider>
  );
}
