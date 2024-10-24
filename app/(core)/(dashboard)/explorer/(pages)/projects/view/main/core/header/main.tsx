import { GlassAreaContainer } from '@/components/glass/area/main';
import { AstralAddIcon } from '@/icons/add/main';
import { AstralChevronLeftIcon } from '@/icons/chevron-left/main';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { glassFx } from '@/style/data';

export function VentureHorizonsFooter() {
  return (
    <GlassAreaContainer
      name={VentureHorizonsFooter.name}
      sizeFx='w-full h-[5rem]'
      glassFx={glassFx['glass-5']}
      className='flex flex-row items-center justify-between px-[50px]'
    >
      <div className='flex w-1/3 flex-row justify-start '></div>
      <div className='flex w-1/3  flex-row justify-center gap-[1rem] space-x-[3rem]'>
        <button>
          <AstralChevronLeftIcon />
        </button>
        <p className='text-md font-bold text-slate-300'>2024 Q1</p>{' '}
        <button>
          <AstralChevronRightIcon />
        </button>
      </div>
      <div className='flex w-1/3 flex-row justify-end '>
        <button>
          <AstralAddIcon />
        </button>
      </div>
    </GlassAreaContainer>
  );
}
