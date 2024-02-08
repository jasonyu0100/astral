'use client';

import { setup, isSupported, LoomVideo } from '@loomhq/record-sdk';
import { useContext, useMemo } from 'react';
import { FlowModalContext } from '../../../../../../../../../../(modals)/flow-modal/main';

export function FlowLoomButton() {
  const { addLoomModal: addLoom } = useContext(FlowModalContext);
  const BUTTON_ID = 'loom-record-sdk-button';

  useMemo(() => {
    async function setupLoom() {
      const { supported, error } = await isSupported();

      if (!supported) {
        console.warn(`Error setting up Loom: ${error}`);
        return;
      }

      const button = document.getElementById(BUTTON_ID);

      if (!button) {
        return;
      }

      const { configureButton } = await setup({
        publicAppId: process.env.NEXT_PUBLIC_LOOM_APIKEY,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on('insert-click', async (video: LoomVideo) => {
        let loomObj: any = {
          ...video,
          id: crypto.randomUUID(),
          loomId: video.id,
        };
        addLoom.updateLoom(loomObj);
        addLoom.open();
      });
    }

    setupLoom();
  }, []);

  return (
    <button
      className='flex h-[60px] w-[60px] items-center justify-center hover:bg-slate-950'
      id={BUTTON_ID}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-[24px] w-[24px]'
        viewBox='0 0 19 20'
        fill='none'
      >
        <g clip-path='url(#clip0_2179_1443)'>
          <path
            d='M19 8.95807H13.4532L18.2645 6.16935L17.2226 4.33065L12.4113 7.11936L15.2 2.30806L13.3613 1.23548L10.5726 6.04677V0.5H8.45807V6.04677L5.66935 1.23548L3.83065 2.27742L6.61936 7.08871L1.80806 4.33065L0.766129 6.16935L5.57742 8.95807H0V11.0726H5.54677L0.735484 13.8306L1.77742 15.6694L6.58871 12.8806L3.8 17.6919L5.63871 18.7339L8.42742 13.9226V19.5H10.5419V13.9532L13.3306 18.7645L15.1694 17.7226L12.3806 12.9113L17.1919 15.7L18.2339 13.8613L13.4226 11.0726H19V8.95807ZM9.5 12.8806C7.90645 12.8806 6.61936 11.5935 6.61936 10C6.61936 8.40645 7.90645 7.11936 9.5 7.11936C11.0935 7.11936 12.3806 8.40645 12.3806 10C12.3806 11.5935 11.0935 12.8806 9.5 12.8806Z'
            fill='#CBD5E1'
          />
        </g>
        <defs>
          <clipPath id='clip0_2179_1443'>
            <rect
              width='19'
              height='19'
              fill='white'
              transform='translate(0 0.5)'
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
