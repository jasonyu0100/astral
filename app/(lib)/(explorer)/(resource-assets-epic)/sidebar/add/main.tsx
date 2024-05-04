import { DivInputProps } from '@/(types)/element/main';
import { ResourcePolaroid } from '../polaroid/main';

export function CollectionResourceAdd({ ...props }: DivInputProps) {
  return (
    <ResourcePolaroid {...props}>
      <div className='flex aspect-square w-full items-center justify-center bg-black'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 25 25'
          className='h-1/2 w-1/2'
          fill='none'
        >
          <mask
            id='mask0_3140_7'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='25'
            height='25'
          >
            <rect
              x='0.777588'
              y='0.335144'
              width='24'
              height='24'
              fill='#D9D9D9'
            />
          </mask>
          <g mask='url(#mask0_3140_7)'>
            <path
              d='M11.7776 13.3351H5.77759V11.3351H11.7776V5.33514H13.7776V11.3351H19.7776V13.3351H13.7776V19.3351H11.7776V13.3351Z'
              fill='#CBD5E1'
            />
          </g>
        </svg>
      </div>
    </ResourcePolaroid>
  );
}
