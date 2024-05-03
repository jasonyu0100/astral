import { WrapperTooltip } from '@/(pkgs)/(basic)/tooltip/main';
import { ButtonInputProps } from '@/(lgx)/types/element/main';

export function MapHeaderNoteButton({ ...props }: ButtonInputProps) {
  return (
    <WrapperTooltip text='Add Note'>
      <button
        className='flex h-[4rem] w-[4rem] items-center justify-center hover:bg-slate-950'
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='h-1/2 w-1/2'
          fill='none'
        >
          <mask
            id='mask0_3108_147'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <rect width='24' height='24' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_3108_147)'>
            <path
              d='M6.99977 20V8.97501C6.99977 8.42501 7.19977 7.95835 7.59977 7.57501C7.99977 7.19168 8.47477 7.00001 9.02477 7.00001H19.9998C20.5498 7.00001 21.0206 7.19585 21.4123 7.58751C21.8039 7.97918 21.9998 8.45001 21.9998 9.00001V17L16.9998 22H8.99977C8.44977 22 7.97894 21.8042 7.58727 21.4125C7.1956 21.0208 6.99977 20.55 6.99977 20ZM2.02477 6.25001C1.92477 5.70001 2.0331 5.20418 2.34977 4.76251C2.66644 4.32085 3.09977 4.05001 3.64977 3.95001L14.4998 2.02501C15.0498 1.92501 15.5456 2.03335 15.9873 2.35001C16.4289 2.66668 16.6998 3.10001 16.7998 3.65001L17.0498 5.00001H14.9998L14.8248 4.00001L3.99977 5.92501L4.99977 11.575V18.55C4.7331 18.4 4.50394 18.2 4.31227 17.95C4.1206 17.7 3.99977 17.4167 3.94977 17.1L2.02477 6.25001ZM8.99977 9.00001V20H15.9998V16H19.9998V9.00001H8.99977Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </button>
    </WrapperTooltip>
  );
}
