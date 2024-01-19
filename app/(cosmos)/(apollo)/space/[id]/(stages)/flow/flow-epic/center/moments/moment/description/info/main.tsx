import { UserObj } from '@/tables/user/main';

export function MomentInfo({ user }: { user: UserObj }) {
  return (
    <div className='h-[40px] w-full flex flex-row items-center space-x-[2rem]'>
      <img
        src={user.profilePicture.src}
        className='h-[40px] w-[40px] rounded-full'
      />
      <span className='text-white text-md font-extraBold'>
        {user.fname} {user.lname}
      </span>
    </div>
  );
}
