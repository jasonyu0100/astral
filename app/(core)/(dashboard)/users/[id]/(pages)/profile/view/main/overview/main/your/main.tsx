import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { UserProfileOverviewGallery } from './gallery/main';

export function UserProfileOverviewYour() {
  return (
    <div className='flex w-full flex-col space-y-[2rem]'>
      <p className='text-2xl font-bold text-slate-300'>Highlights</p>
      <HorizontalDivider />
      <UserProfileOverviewGallery />
    </div>
  );
}
