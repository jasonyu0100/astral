import { useGlobalUser } from '@/(logic)/internal/data/infra/store/user/main';

export function MomentInfo() {
  const user = useGlobalUser((state) => state.user);

  return (
    <div className='flex h-[40px] w-full flex-row items-center space-x-[2rem]'>
      <img
        src={user.profilePicture?.src}
        className='h-[40px] w-[40px] rounded-full'
      />
      <span className='text-md font-extraBold text-white'>
        {user.fname} {user.lname}
      </span>
    </div>
  );
}
