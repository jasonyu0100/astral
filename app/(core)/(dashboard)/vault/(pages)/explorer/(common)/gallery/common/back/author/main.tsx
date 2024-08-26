import { useGlobalUser } from '@/logic/internal/store/user/main';

export function GalleryBackAuthor() {
  const loggedInUser = useGlobalUser((state) => state.user);
  return (
    <div className='text-md mt-[1rem] font-normal text-slate-500'>
      {loggedInUser?.fname} {loggedInUser?.lname}
    </div>
  );
}
