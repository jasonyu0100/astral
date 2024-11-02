import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { ContextForUserConnectionObj } from '@/architecture/model/user/connection/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { UserProfileConnectionsRowNumber } from './number/main';

export function UserProfileConnectionsTableRow() {
  const connectionObj = useContext(ContextForUserConnectionObj);
  const userController = useControllerForUserMain(connectionObj.destinationId);
  const user = userController.state.obj;

  return (
    <ContextForUserObj.Provider value={user}>
      <div className='grid w-full grid-cols-6 items-center border-slate-300 border-opacity-30 py-[2rem]'>
        <UserProfileConnectionsRowNumber />
        <div className='flex flex-row items-center space-x-[2rem]'>
          <img
            src={user?.dp?.src || exampleFileElement.src}
            className='h-[3rem] w-[3rem] rounded-full object-cover'
          />
          <div className='flex flex-col justify-center'>
            <p className='text-md font-bold text-white'>{user?.displayName}</p>
            <p className='font-light text-white'>{user?.email}</p>
          </div>
        </div>
        <div></div>
        <div className='flex'>
          <p className='text-md font-bold text-white'>{user?.role}</p>
        </div>
      </div>
    </ContextForUserObj.Provider>
  );
}
