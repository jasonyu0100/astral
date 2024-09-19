import { AstralArrowDropDown } from '@/icons/arrow-drop-down/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { ContextForHorizonsHorizonModals } from '../../../../modals/controller/main';

export function HorizonsHorizonListPost() {
  const horizonsHorizonModal = useContext(ContextForHorizonsHorizonModals);
  return (
    <div
      className='flex w-full flex-row items-center space-x-[4rem]'
      onClick={() => {
        horizonsHorizonModal.horizonPostModal.open();
      }}
    >
      <div className='flex h-[250px] w-[200px] flex-shrink-0 flex-col items-center space-y-[1rem] bg-white p-[1rem] shadow-glow'>
        <img src='/stock/passion.png' className='aspect-square w-full' />
        <p className='font-permanentMarker'>123</p>
      </div>
      <div className='flex h-full w-full flex-col justify-between space-y-[1rem]'>
        <div className='flex h-full w-full flex-col items-center justify-center space-y-[1rem]'>
          <p className='w-full text-center text-lg font-bold text-slate-300'>
            User Experience Design
          </p>
          <p className='w-full text-center text-lg font-light text-slate-300'>
            Astral is the creative collaborative platform that grows with you.
            Whether you're a creative visionary, product manager, or startup
            founder, Astral empowers you and your team with the tools to
            transform ideas into reality, fostering collaboration every step of
            the way.
          </p>
        </div>
        <HorizontalDivider />
      </div>
      <div className='flex flex-col items-center space-y-[1rem]'>
        <AstralArrowDropUp className='h-[3rem] w-[3rem]' />
        <p className='text-lg font-bold text-slate-300'>12</p>
        <AstralArrowDropDown className='h-[3rem] w-[3rem]' />
      </div>
    </div>
  );
}
