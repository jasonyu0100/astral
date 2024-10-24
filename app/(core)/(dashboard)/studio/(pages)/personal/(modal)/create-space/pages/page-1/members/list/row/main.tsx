import { useControllerForUserMain } from '@/(server)/controller/user/main';
import { ContextForUserConnectionObj } from '@/(server)/model/user/connection/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { useContext } from 'react';

export function CreateSpaceCollaboratorRow({
  onClick,
}: {
  onClick: () => void;
}) {
  const connection = useContext(ContextForUserConnectionObj);
  const userController = useControllerForUserMain(connection.destinationId);
  const user = userController.state.obj;

  return (
    <div
      className='flex cursor-pointer flex-row items-center space-x-[1rem]'
      onClick={onClick}
    >
      <UserDisplayPictureElement fileElem={user?.dp} />
      <p className='font-bold'>{user?.displayName}</p>
    </div>
  );
}
