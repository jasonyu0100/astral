import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ContextForTaskObj } from '@/(server)/model/task/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesBoardLogTableItem } from './item/main';

export function SpacesBoardTableList() {
  const wayListController = useContext(ContextForTaskList);

  return (
    <div className='flex w-full flex-col space-y-[1rem] pt-[2rem]'>
      {wayListController.state.objs.map((log, index) => (
        <ContextForIndexable.Provider value={index}>
          <ContextForTaskObj.Provider value={log}>
            <SpacesBoardLogTableItem />
          </ContextForTaskObj.Provider>
        </ContextForIndexable.Provider>
      ))}
    </div>
  );
}
