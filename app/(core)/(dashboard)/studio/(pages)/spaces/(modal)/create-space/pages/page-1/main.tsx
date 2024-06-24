import { FormBody } from '@/(components)/(form)/body/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { FormInput } from '@/(components)/(form)/input/main';
import {
  ContextForTogglable,
  useControllerForTogglable,
} from '@/(logic)/contexts/togglable/main';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/(controller)/user/connection/list';
import { ContextForCurrentUserObj } from '@/(server)/(model)/user/main';
import { useContext } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceAddCollaborator } from './members/add/main';
import { CreateSpaceCollaboratorList } from './members/list/main';
import { CreateSpaceCollaborator } from './members/member/main';

export function CreateSpaceModalPageOne() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const {
    title,
    updateTitle,
    thumbnail,
    updateThumbnail,
    category,
    updateCategory,
    memberIds: memberIds,
    updateMemberIds: updateMemberIds,
  } = pageOne;
  const currentUser = useContext(ContextForCurrentUserObj);
  const connectListController = useControllerForUserConnectionList(
    currentUser.id,
  );

  const togglableController = useControllerForTogglable();

  return (
    <FormBody>
      <FormSearchImage
        fileElem={thumbnail}
        onChange={(file) => updateThumbnail(file)}
        label='Thumbnail'
      />
      <FormInput
        title='Title'
        value={title}
        placeholder='e.g My Space'
        onChange={(e) => updateTitle(e.target.value)}
      />
      <FormInput
        title='Category'
        value={category}
        placeholder='e.g Music, Art, Design'
        onChange={(e) => updateCategory(e.target.value)}
      />
      <label className='mb-1 text-xs font-bold text-slate-400'>Members</label>
      <div className='flex flex-row space-x-[1rem]'>
        <CreateSpaceAddCollaborator onClick={togglableController.toggle} />
        {memberIds.map((connectionId) => (
          <CreateSpaceCollaborator
            connectionId={connectionId}
            onClick={() => {
              updateMemberIds(memberIds.filter((id) => id !== connectionId));
            }}
          />
        ))}
      </div>
      {togglableController.toggled && (
        <ContextForUserConnectionList.Provider value={connectListController}>
          <ContextForTogglable.Provider value={togglableController}>
            <CreateSpaceCollaboratorList />
          </ContextForTogglable.Provider>
        </ContextForUserConnectionList.Provider>
      )}
    </FormBody>
  );
}
