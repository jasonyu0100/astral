import { FormBody } from '@/(components)/(form)/body/main';
import { FormSearchImage } from '@/(components)/(form)/file/search/search-image/main';
import { FormInput } from '@/(components)/(form)/input/main';
import { useControllerForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { ContextForUserConnectionObj } from '@/(server)/(model)/user/connection/main';
import { ContextForCurrentUserObj } from '@/(server)/(model)/user/main';
import { useContext, useState } from 'react';
import { ContextForCreateSpace } from '../../(controller)/create-space/main';
import { CreateSpaceCollaboratorRow } from './collaborator/main';

export function CreateSpaceModalPageOne() {
  const { pageOne } = useContext(ContextForCreateSpace);
  const {
    title,
    updateTitle,
    thumbnail,
    updateThumbnail,
    category,
    updateCategory,
  } = pageOne;
  const currentUser = useContext(ContextForCurrentUserObj);
  const connectListController = useControllerForUserConnectionList(
    currentUser.id,
  );

  const [addCollaborator, setAddCollaborator] = useState(false);

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
      <label className='mb-1 text-xs font-bold text-slate-400'>
        Collaborators
      </label>
      <div className='flex flex-row space-x-[1rem]'>
        <div
          className='flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-slate-200'
          onClick={() => setAddCollaborator(!addCollaborator)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-1/2 w-1/2'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3276_7'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3276_7)'>
              <path
                d='M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z'
                className='fill-white'
              />
            </g>
          </svg>
        </div>
      </div>
      {addCollaborator && (
        <div className='flex w-full flex-col space-y-[1rem] bg-slate-200 bg-opacity-30 p-[0.5rem]'>
          {connectListController.state.objs.map((connection) => (
            <ContextForUserConnectionObj.Provider value={connection}>
              <CreateSpaceCollaboratorRow />
            </ContextForUserConnectionObj.Provider>
          ))}
        </div>
      )}
    </FormBody>
  );
}
