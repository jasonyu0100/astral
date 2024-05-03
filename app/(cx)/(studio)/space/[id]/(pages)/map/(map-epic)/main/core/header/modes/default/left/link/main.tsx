import { WrapperTooltip } from '@/(pkgs)/(basic)/tooltip/main';
import { ButtonInputProps } from '@/(lgx)/types/element/main';

export function MapHeaderLinkButton({ ...props }: ButtonInputProps) {
  return (
    <WrapperTooltip text='Add Link'>
      <button
        className='flex h-[4rem] w-[4rem] items-center justify-center hover:bg-slate-950'
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-1/2 w-1/2'
          viewBox='0 0 25 25'
          fill='none'
        >
          <mask
            id='mask0_3146_19'
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
          <g mask='url(#mask0_3146_19)'>
            <path
              d='M11.1917 17.5723H7.19165C5.80832 17.5723 4.62915 17.0848 3.65415 16.1098C2.67915 15.1348 2.19165 13.9557 2.19165 12.5723C2.19165 11.189 2.67915 10.0098 3.65415 9.03483C4.62915 8.05983 5.80832 7.57233 7.19165 7.57233H11.1917V9.57233H7.19165C6.35832 9.57233 5.64998 9.86399 5.06665 10.4473C4.48332 11.0307 4.19165 11.739 4.19165 12.5723C4.19165 13.4057 4.48332 14.114 5.06665 14.6973C5.64998 15.2807 6.35832 15.5723 7.19165 15.5723H11.1917V17.5723ZM8.19165 13.5723V11.5723H16.1917V13.5723H8.19165ZM13.1917 17.5723V15.5723H17.1917C18.025 15.5723 18.7333 15.2807 19.3167 14.6973C19.9 14.114 20.1917 13.4057 20.1917 12.5723C20.1917 11.739 19.9 11.0307 19.3167 10.4473C18.7333 9.86399 18.025 9.57233 17.1917 9.57233H13.1917V7.57233H17.1917C18.575 7.57233 19.7542 8.05983 20.7292 9.03483C21.7042 10.0098 22.1917 11.189 22.1917 12.5723C22.1917 13.9557 21.7042 15.1348 20.7292 16.1098C19.7542 17.0848 18.575 17.5723 17.1917 17.5723H13.1917Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
