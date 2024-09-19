import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { HorizonsHorizonListPost } from './list/item/main';

export function HorizonsHorizonMain() {
  return (
    <div
      style={{ height: 'calc(100% - 8rem)' }}
      className='flex w-full flex-col overflow-auto p-[4rem]'
    >
      <div className='flex w-full flex-col items-end space-y-[4rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='font-light text-slate-300'>30 minutes ago</p>
          <HorizontalDivider />
        </div>
        <HorizonsHorizonListPost />
        <HorizonsHorizonListPost />
        <div className='flex w-full flex-col space-y-[1rem]'>
          <p className='font-light text-slate-300'>30 minutes ago</p>
          <HorizontalDivider />
        </div>
        <HorizonsHorizonListPost />
      </div>
    </div>
  );
}
