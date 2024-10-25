import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function NetworkCreativeRowRole() {
  const user = useContext(ContextForUserObj);

  return (
    <div className='flex'>
      <p className='text-lg font-light text-white'>{user.role}</p>
    </div>
  );
}
