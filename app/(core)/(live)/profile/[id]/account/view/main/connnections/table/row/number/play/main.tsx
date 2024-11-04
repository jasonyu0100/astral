import { userProfileMap } from '@/(core)/(live)/profile/[id]/map';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { useContext } from 'react';

export function UserProfileConnectionsNumberPlay() {
  const user = useContext(ContextForUserObj);

  return (
    <a href={userProfileMap.account.link(user.id)}>
      <AstralPlayIcon />
    </a>
  );
}
