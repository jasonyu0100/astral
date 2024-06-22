import { useControllerForUserMain } from '@/(server)/(controller)/user/main';
import { exampleFileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForUserBackerObj } from '@/(server)/(model)/user/backer/main';
import { ContextForUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { ContextForProfilePage } from '../../../../page';
import { UserProfileConnectionsRowNumber } from '../../../connections/table/row/number/main';

export function UserProfileBackersTableRow() {
  const { admin } = useContext(ContextForProfilePage);
  const backerObj = useContext(ContextForUserBackerObj);
  const backerController = useControllerForUserMain(
    admin ? backerObj.backerId : backerObj.userId,
  );
  const backer = backerController.state.obj;

  return (
    <ContextForUserObj.Provider value={backer}>
      <div className='grid w-full grid-cols-6 items-center border-slate-300 border-opacity-30 py-[2rem]'>
        <UserProfileConnectionsRowNumber />
        <div className='flex flex-row items-center space-x-[2rem]'>
          <img
            src={backer?.dp?.src || exampleFileElem.src}
            className='h-[3rem] w-[3rem] rounded-full object-cover'
          />
          <div className='flex flex-col justify-center'>
            <p className='text-lg font-bold text-white'>{backer.displayName}</p>
            <p className='font-light text-white'>{backer.email}</p>
          </div>
        </div>
        <div></div>
        <div className='flex'>
          <p className='text-lg font-bold text-white'>{backer.role}</p>
        </div>
        <div className='flex justify-center'></div>
        <div className='flex justify-center'></div>
      </div>
    </ContextForUserObj.Provider>
  );
}
