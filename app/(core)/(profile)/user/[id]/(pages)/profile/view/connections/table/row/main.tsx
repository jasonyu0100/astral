import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { ContextForProfilePage } from '../../../../page';
import { UserProfileConnectionsRowNumber } from './number/main';

export function UserProfileFollowersTableRow() {
  const { admin } = useContext(ContextForProfilePage);
  const connectionObj = useContext(ContextForUserConnectionObj);
  const connectionController = useControllerForUserMain(
    admin ? connectionObj.connectionId : connectionObj.userId,
  );
  const connection = connectionController.state.obj;

  return (
    <ContextForUserObj.Provider value={connection}>
      <div className='grid w-full grid-cols-6 items-center border-slate-300 border-opacity-30 py-[2rem]'>
        <UserProfileConnectionsRowNumber />
        <div className='flex flex-row items-center space-x-[2rem]'>
          <img
            src={connection?.dp?.src || exampleFileElem.src}
            className='h-[3rem] w-[3rem] rounded-full object-cover'
          />
          <div className='flex flex-col justify-center'>
            <p className='text-lg font-bold text-white'>
              {connection.displayName}
            </p>
            <p className='font-light text-white'>{connection.email}</p>
          </div>
        </div>
        <div></div>
        <div className='flex'>
          <p className='text-lg font-bold text-white'>{connection.role}</p>
        </div>
        <div className='flex justify-center'></div>
        <div className='flex justify-center'></div>
      </div>
    </ContextForUserObj.Provider>
  );
}
