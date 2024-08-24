import { SvgInputProps } from '@/(types)/props/main';

export function SpaceMapSaveIcon({ ...props }: SvgInputProps) {
  return (
    <div className='flex flex-row items-center space-x-[1rem] rounded-md bg-blue-500 px-[1rem] py-[0.5rem]'>
      <p className='font-bold text-slate-300'>Map</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        fill='#e8eaed'
      >
        <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
      </svg>
    </div>
  );
}
