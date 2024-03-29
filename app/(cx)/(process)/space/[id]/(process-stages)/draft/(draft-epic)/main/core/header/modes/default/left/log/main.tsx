'use client';
import { ButtonInputProps } from '@/(logic)/types/element/main';
import {
  LogObj,
  LogVariant,
} from '@/(logic)/internal/model/resource/log/main';
import { StarModalContext } from '@/(modals)/(process)/star-modal/main';
import { setup, isSupported, LoomVideo } from '@loomhq/record-sdk';
import { useContext, useEffect, useMemo } from 'react';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';

export function DraftHeaderLogButton({ ...props }: ButtonInputProps) {
  const { updateLogObj, open } = useContext(StarModalContext).addLogStarModal;
  const BUTTON_ID = 'loom-record-sdk-button';

  useEffect(() => {
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
        publicAppId: process.env.LOOM_API_KEY,
      });

      const sdkButton = configureButton({ element: button });

      sdkButton.on('insert-click', async (video: LoomVideo) => {
        const logObj: LogObj = {
          id: crypto.randomUUID(),
          loomId: video.id,
          embedUrl: video.embedUrl,
          height: video.height,
          width: video.width,
          sharedUrl: video.sharedUrl,
          providerUrl: video.providerUrl,
          variant: LogVariant.SCREEN,
        };
        updateLogObj(logObj);
        open();
      });
    }

    setupLoom();
  }, []);

  return (
    <WrapperTooltip text='Add Log'>
      <button
        className='flex h-[60px] w-[60px] items-center justify-center hover:bg-slate-950'
        id={BUTTON_ID}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-1/2 w-1/2'
          viewBox='0 0 25 25'
          fill='none'
        >
          <mask
            id='mask0_3146_13'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.19165'
              y='0.572327'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3146_13)'>
            <path
              d='M4.19165 20.5723C3.64165 20.5723 3.17082 20.3765 2.77915 19.9848C2.38748 19.5932 2.19165 19.1223 2.19165 18.5723V6.57233C2.19165 6.02233 2.38748 5.55149 2.77915 5.15983C3.17082 4.76816 3.64165 4.57233 4.19165 4.57233H16.1917C16.7417 4.57233 17.2125 4.76816 17.6042 5.15983C17.9958 5.55149 18.1917 6.02233 18.1917 6.57233V11.0723L22.1917 7.07233V18.0723L18.1917 14.0723V18.5723C18.1917 19.1223 17.9958 19.5932 17.6042 19.9848C17.2125 20.3765 16.7417 20.5723 16.1917 20.5723H4.19165ZM4.19165 18.5723H16.1917V6.57233H4.19165V18.5723Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
