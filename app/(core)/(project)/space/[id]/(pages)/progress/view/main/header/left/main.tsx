import { cn } from '@/utils/cn';

export function SpaceProgressHeaderLeft() {
  return (
    <div className='flex w-1/3 flex-row'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 -960 960 960'
        className={cn('h-[1.5rem] w-[1.5rem] cursor-pointer fill-slate-300')}
      >
        <path d='M121-280v-400q0-33 23.5-56.5T201-760h559q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H201q-33 0-56.5-23.5T121-280Zm79 0h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z' />
      </svg>
    </div>
  );
}
