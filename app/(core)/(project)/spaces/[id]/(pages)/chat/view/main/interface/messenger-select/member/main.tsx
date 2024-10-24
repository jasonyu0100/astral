import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForSpaceMemberObj } from '@/(server)/model/space/member/main';
import { useContext } from 'react';

export function SpacesChatsMember({
  handleSelect,
}: {
  handleSelect: (member: any) => void;
}) {
  const spaceMemberObj = useContext(ContextForSpaceMemberObj);
  const user = useControllerForUserMain(spaceMemberObj.userId);
  console.log(user);

  return (
    <div
      key={user.state.objId}
      className='flex cursor-pointer items-center p-2'
      onClick={() => handleSelect(user.state.obj)}
    >
      {/* <img
        src={user.state.obj?.dp?.src}
        className='mr-2 h-[2rem] w-[2rem] rounded-full'
      /> */}
      <span className='text-slate-300'>
        {user.state?.obj?.fname} {user.state?.obj?.lname}
      </span>
    </div>
  );
}
