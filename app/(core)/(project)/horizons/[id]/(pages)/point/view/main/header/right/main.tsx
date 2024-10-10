import { AstralArrowForwardIcon } from '@/icons/arrow-forward/main';

export function HorizonsPointHeaderRight() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-end'>
      <button
        className='flex animate-pulse-slow flex-row items-center space-x-[1rem] rounded-md bg-gradient-to-r from-purple-700 to-purple-500 px-[1rem] py-[0.5rem]'
        onClick={() => {}}
      >
        <p className='font-bold text-slate-300'>Ready Space</p>
        <AstralArrowForwardIcon />
      </button>
    </div>
  );
}
