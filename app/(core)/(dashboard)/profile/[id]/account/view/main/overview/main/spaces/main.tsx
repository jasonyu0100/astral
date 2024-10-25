import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { UserProfileOverviewHighlights } from './highlights/main';

export function UserProfileOverviewSpaces() {
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-2xl font-bold text-slate-300'>Highlights</p>
      <HorizontalDivider />
      <UserProfileOverviewHighlights />
    </div>
  );
}
