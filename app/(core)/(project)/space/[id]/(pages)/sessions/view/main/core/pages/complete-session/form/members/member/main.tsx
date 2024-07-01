import { ProfileCover } from '@/(components)/(element)/profile/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';

export function SpaceSessionsCollaborator({
  connectedId,
  onClick,
}: {
  connectedId: string;
  onClick: () => void;
}) {
  const userController = useControllerForUserMain(connectedId);
  const user = userController.state.obj;

  return (
    <div onClick={onClick} className='cursor-pointer'>
      <ProfileCover fileElem={user?.dp} />
    </div>
  );
}
