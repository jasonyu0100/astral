import { ElementLink } from '@/components/element/link/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForTaskLinkList } from '@/server/controller/way/link/list';
import { ContextForTaskLinkObj } from '@/server/model/task/link/main';
import { useContext } from 'react';
import { SpacesProgressSidebarAddFile } from './list/add/file/main';
import { SpaceBoardSidebarAddText } from './list/add/text/main';
import { SpacesLinkTextIdea } from './list/override/main';

export function SpacesProgressSidebarLinksList() {
  const linkListController = useContext(ContextForTaskLinkList);

  return (
    <div className='flex flex-col space-y-[1rem] p-[1rem]'>
      {linkListController.state.objs.map((link) => (
        <ContextForTaskLinkObj.Provider value={link}>
          <ElementLink textOveride={<SpacesLinkTextIdea />} />
        </ContextForTaskLinkObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesProgressSidebarAddFile />
      <SpaceBoardSidebarAddText />
    </div>
  );
}
