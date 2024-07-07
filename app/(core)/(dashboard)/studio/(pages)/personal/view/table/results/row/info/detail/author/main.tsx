import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function SpaceInfoDetailAuthor() {
  const loggedInUser = useGlobalUser((state) => state.user);

  return (
    <p className='text-lg font-bold text-slate-700'>
      {loggedInUser?.fname} {loggedInUser?.lname}
    </p>
  );
}
