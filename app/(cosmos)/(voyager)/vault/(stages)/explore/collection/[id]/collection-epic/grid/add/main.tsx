import { ButtonInputProps } from '@/(common)/types/main';

export function CollectionResourceAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <div className='flex aspect-[36/16] h-[150px] flex-row items-center space-x-[3rem]'>
        <div className='flex h-[150px] w-[150px] items-center justify-center rounded-full bg-black'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-1/6 w-1/6'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M8.52138 11.3434H0.0551758V8.52138H8.52138V0.0551758H11.3434V8.52138H19.8096V11.3434H11.3434V19.8096H8.52138V11.3434Z'
              fill='#CBD5E1'
            />
          </svg>
        </div>
        <p className='text-lg font-bold text-white'>Add File</p>
      </div>
    </button>
  );
}
