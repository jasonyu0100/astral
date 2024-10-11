import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileOverviewGallery } from './gallery/main';

export function UserProfileOverviewSpaces() {
  const profileUser = useContext(ContextForProfileUserObj);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='text-2xl font-bold text-slate-300'>Highlights</p>
      <HorizontalDivider />
      <UserProfileOverviewGallery />
    </div>
  );
}
