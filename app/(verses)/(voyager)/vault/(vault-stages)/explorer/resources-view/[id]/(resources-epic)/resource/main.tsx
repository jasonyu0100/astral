import { ResourceContext } from '@/(ouros)/(model)/resource/main';
import { useContext } from 'react';
import { ResourceImage } from './image/main';
import { ResourceInfo } from './info/main';
import {
  useFileModal,
  ResourceModalContext,
} from '@/(verses)/(modals)/resource-modal/main';
import { ResourceModalView } from '@/(verses)/(modals)/resource-modal/view';
import { FileVariant } from '@/(ouros)/(model)/resource/file/main';

export function CollectionResource() {
  const resource = useContext(ResourceContext);
  const modalContext = useFileModal();
  const variant = resource?.file?.variant;

  return (
    <ResourceModalContext.Provider value={modalContext}>
      <ResourceModalView />
      {variant === FileVariant.IMAGE && (
        <div className='mb-[20px] ml-[25px] flex aspect-[13/16] h-[300px] flex-shrink-0 flex-col items-center bg-stone-100 p-[20px] pb-[0px]'>
          <img
            src={resource?.file?.src}
            onClick={() => modalContext.editResourceModal.open()}
            className='aspect-square w-full cursor-pointer'
          />
          <p className='font-extraBold text-xl w-full'>{resource.file?.title}</p>
        </div>
      )}
      {variant === FileVariant.AUDIO && (
        <div className='mb-[20px] ml-[25px] flex aspect-[13/16] h-[300px] flex-shrink-0 flex-col items-center bg-stone-100 p-[20px] pb-[0px]'>
          <div className='flex aspect-square w-full items-center justify-center bg-slate-950 p-[30px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className="w-1/2 h-1/2"
              fill='none'
            >
              <mask
                id='mask0_3134_7'
                maskUnits='userSpaceOnUse'
                x='0'
                y='0'
                width='24'
                height='24'
              >
                <rect width='24' height='24' fill='#D9D9D9' />
              </mask>
              <g mask='url(#mask0_3134_7)'>
                <path
                  d='M10 21C8.9 21 7.95833 20.6083 7.175 19.825C6.39167 19.0417 6 18.1 6 17C6 15.9 6.39167 14.9583 7.175 14.175C7.95833 13.3917 8.9 13 10 13C10.3833 13 10.7375 13.0458 11.0625 13.1375C11.3875 13.2292 11.7 13.3667 12 13.55V3H18V7H14V17C14 18.1 13.6083 19.0417 12.825 19.825C12.0417 20.6083 11.1 21 10 21Z'
                  fill='#CBD5E1'
                />
              </g>
            </svg>
          </div>
          <p className='font-extraBold text-xl'>{resource.file?.title}</p>
        </div>
      )}

      {/* <div className='flex aspect-[40/16] h-[150px] flex-row items-center space-x-[3rem]'>
        {variant === FileVariant.AUDIO && (
          <ResourceImage
            src={resource?.file?.src}
            onClick={() => modalContext.editResourceModal.open()}
            className='aspect-square h-full cursor-pointer rounded-full'
          />
        )}
        {variant === FileVariant.VIDEO && (
          <ResourceImage
            src={resource?.file?.src}
            onClick={() => modalContext.editResourceModal.open()}
            className='aspect-square h-full cursor-pointer rounded-full'
          />
        )}
        {variant === FileVariant.IMAGE && (
          <ResourceImage
            src={resource?.file?.src}
            onClick={() => modalContext.editResourceModal.open()}
            className='aspect-square h-full cursor-pointer rounded-full'
          />
        )}
        <ResourceInfo />
      </div> */}
    </ResourceModalContext.Provider>
  );
}
