import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';

export function CreativeNetworkRowRole() {
  const user = useContext(ContextForUserObj);

  return (
    <div className='flex'>
      <p className='text-lg font-light text-slate-900'>{user.role}</p>
    </div>
  );
}
