import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { KarmaState } from '../../../sidebar/item/header/main';

export function HorizonsHorizonStatus() {
  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <div className='flex w-full flex-row justify-between'>
        <p className='font-light text-slate-300'>30 minutes ago</p>
        <p className='font-light text-slate-300'>{KarmaState.Full} 363</p>
      </div>
      <HorizontalDivider />
    </div>
  );
}
