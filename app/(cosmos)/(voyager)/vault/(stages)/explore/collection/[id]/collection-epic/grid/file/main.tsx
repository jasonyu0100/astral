import { ResourceObj } from '@/tables/resource/main';
import { FileModalContext, useFileModalContext } from './modal/main';
import { FileModalsView } from './modal/view';
import { createContext } from 'react';

export const FileContext = createContext({} as ResourceObj);

export function CollectionResource({
  resource: resource,
}: {
  resource: ResourceObj;
}) {
  const modalContext = useFileModalContext();

  return (
    <FileContext.Provider value={resource}>
      <FileModalContext.Provider value={modalContext}>
        <FileModalsView />
        <div className='flex aspect-[36/16] h-[150px] flex-row items-center space-x-[3rem]'>
          <img
            src={resource?.file?.src}
            className='h-[150px] w-[150px] cursor-pointer rounded-full'
            onClick={() => modalContext.editFile.open()}
          />
          <div className='flex flex-col'>
            <p className='text-xl font-bold text-slate-300'>{resource.name}</p>
            <p className='text-lg font-bold text-slate-400'>
              {resource?.file?.fileType}
            </p>
            <p className='text-lg font-bold text-slate-400'>
              {resource.description}
            </p>
          </div>
        </div>
      </FileModalContext.Provider>
    </FileContext.Provider>
  );
}
