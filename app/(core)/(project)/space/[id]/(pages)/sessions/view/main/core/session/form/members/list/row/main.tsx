import { ProfileCover } from '@/(components)/(element)/profile/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { useContext } from 'react';

export function SpaceSessionsCollaboratorRow({
  onClick,
}: {
  onClick: () => void;
}) {
  const connection = useContext(ContextForUserConnectionObj);
  const userController = useControllerForUserMain(connection.connectedId);
  const user = userController.state.obj;

  return (
    <div
      className='flex cursor-pointer flex-row items-center space-x-[1rem]'
      onClick={onClick}
    >
      <ProfileCover fileElem={user?.dp} />
      <p className='font-bold text-slate-300'>{user?.displayName}</p>
    </div>
  );
}
