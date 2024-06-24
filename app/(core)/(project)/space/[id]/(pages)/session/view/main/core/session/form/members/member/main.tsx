import { ProfileCover } from '@/(components)/(element)/profile/main';
import { useControllerForUserMain } from '@/(server)/(controller)/user/main';

export function SpaceSessionCollaborator({
  connectionId,
  onClick,
}: {
  connectionId: string;
  onClick: () => void;
}) {
  const userController = useControllerForUserMain(connectionId);
  const user = userController.state.obj;

  return (
    <div onClick={onClick} className='cursor-pointer'>
      <ProfileCover fileElem={user.dp} />
    </div>
  );
}
