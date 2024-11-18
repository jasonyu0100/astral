import { ContextForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassAreaContainer } from '@/components/glass/area/main';
import { useContext } from 'react';

export function SpacesPostsSidebarAttachments() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GlassAreaContainer
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
        name={''}
      >
        <div className='h-full w-full overflow-auto'>
          <div className='flex flex-col space-y-[1rem]'>
            {attachmentListController.state.objs.map((attachment) => (
              <div
                className='cursor-pointer'
                onClick={() => {
                  attachmentListController.actions.stateActions.select(
                    attachment,
                  );
                }}
              >
                <ContextForPostAttachmentObj.Provider value={attachment}>
                  <ElementAttachment />
                </ContextForPostAttachmentObj.Provider>
              </div>
            ))}
          </div>
        </div>
      </GlassAreaContainer>
    </div>
  );
}
