import { ResourceContext } from '@/(ouros)/(model)/resource/main';
import { useContext } from 'react';
import { ResourceImage } from './image/main';
import { Aspect } from '@/(common)/aspect/main';
import { ResourceInfo } from './info/main';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(verses)/(modals)/resource-modal/main';
import { ResourceModalView } from '@/(verses)/(modals)/resource-modal/view';

export function CollectionResource() {
  const resource = useContext(ResourceContext);
  const modalContext = useFileModal();

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      <Aspect
        x={36}
        y={16}
        className='flex h-[150px] flex-row items-center space-x-[3rem]'
      >
        <ResourceImage
          src={resource?.file?.src}
          onClick={() => modalContext.editResourceModal.open()}
          className='aspect-square h-full cursor-pointer rounded-full'
        />
        <ResourceInfo />
      </Aspect>
    </ResourceModalContext.Provider>
  );
}
