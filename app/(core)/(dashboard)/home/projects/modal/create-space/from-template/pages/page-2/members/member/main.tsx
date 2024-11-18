import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { UserDisplayPictureElement } from '@/components/cover/user/main';

export function HomeProjectsCreateSpaceCollaborator({
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
      <UserDisplayPictureElement fileElem={user?.dp} />
    </div>
  );
}
