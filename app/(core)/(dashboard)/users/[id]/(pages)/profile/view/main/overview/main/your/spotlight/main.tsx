import { useControllerForPostAttachmentListFromPost } from '@/(server)/controller/post/attachment/list-from-post';
import { ContextForUserPostObj } from '@/(server)/model/post/main';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function UserProfileOverviewPost() {
  const index = useContext(ContextForIndexable);
  const profileUser = useContext(ContextForProfileUserObj);
  const postObj = useContext(ContextForUserPostObj);
  const attachmentListController = useControllerForPostAttachmentListFromPost(
    postObj.id,
  );

  return (
    <div className='grid grid-cols-8 items-center justify-center gap-[2rem]'>
      <p className='text-lg font-bold text-slate-300'>{index}</p>
      <div className='col-span-2'>
        {attachmentListController.state.objs.slice(0).map((attachment) => (
          <img
            className='aspect-square w-full rounded-full bg-black'
            src={attachment.fileElem?.src}
          />
        ))}
      </div>
      <p className='text-lg font-bold text-slate-300'>
        {profileUser.fname} {profileUser.lname}
      </p>
      <p className='text-lg font-bold text-slate-300'>{postObj.title}</p>
      <p className='font-light text-slate-300'>{postObj.description}</p>
      <p className='font-bold text-slate-300'>
        {getFormattedDate(new Date(postObj.created))}
      </p>
    </div>
  );
}
