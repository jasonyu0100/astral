import { useGlobalUser } from '@/(lgx)/internal/store/user/main';

export function SpaceInfoDetailAuthor() {
  const user = useGlobalUser((state) => state.user);

  return (
    <p className='text-lg font-bold text-slate-300'>
      {user.fname} {user.lname}
    </p>
  );
}
