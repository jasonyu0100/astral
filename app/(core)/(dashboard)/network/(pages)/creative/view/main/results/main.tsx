import { ContextForUserPrivateList } from '@/(server)/(controller)/user/private-list';
import { useContext } from 'react';

export function CreativeNetworkResults() {
  const userListController = useContext(ContextForUserPrivateList);

  return (
    <div className='h-full w-full overflow-auto p-[1rem]'>
      <div className={`flex w-full flex-row flex-wrap gap-[2rem] p-[2rem]`}>
        {userListController.state.objs.map((obj) => (
          <p className='text-slate-300'>{obj.email}</p>
        ))}
      </div>
    </div>
  );
}
