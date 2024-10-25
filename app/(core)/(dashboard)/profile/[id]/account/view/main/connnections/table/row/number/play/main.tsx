import { userProfileMap } from '@/(core)/(dashboard)/profile/[id]/map';
import { AstralPlayIcon } from '@/icons/play/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function UserProfileConnectionsNumberPlay() {
  const user = useContext(ContextForUserObj);

  return (
    <a href={userProfileMap.account.link(user.id)}>
      <AstralPlayIcon />
    </a>
  );
}
