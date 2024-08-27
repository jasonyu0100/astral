import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { ContextForTogglable } from '@/logic/contexts/togglable/main';
import { useContext } from 'react';

export function CreativeNetworkSidebarEntryToggle() {
  const { toggled, toggle } = useContext(ContextForTogglable);
  return (
    <div className='flex w-full flex-col'>
      <div className='mt-auto flex flex-row  items-center justify-between'>
        <div className='flex w-full flex-row items-center space-x-[2rem]'>
          <div className='flex flex-col'>
            <p className='text-lg font-bold text-slate-300'>Project Horizon</p>
            <p className='text-md font-bold text-slate-400'>John Smith</p>
          </div>
        </div>
        <button className='h-[50px] w-[50px]' onClick={() => toggle()}>
          {toggled ? (
            <AstralChevronDownIcon className='h-[25px] w-[25px]' />
          ) : (
            <AstralChevronUpIcon className='h-[25px] w-[25px]' />
          )}
        </button>
      </div>
    </div>
  );
}
