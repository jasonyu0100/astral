import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

export function GalleryBackAuthor() {
  const user = useGlobalUser((state) => state.user);
  return (
    <div className='text-md mt-[1rem] font-normal text-slate-500'>
      {user.fname} {user.lname}
    </div>
  );
}
