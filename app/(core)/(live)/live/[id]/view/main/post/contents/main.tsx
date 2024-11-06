import { ContextForPostAttachmentListFromPost } from '@/architecture/controller/post/attachment/list-from-post';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForPostAttachmentObj } from '@/architecture/model/post/attachment/main';
import { ElementAttachment } from '@/components/element/attachment/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { AstralDownloadIcon } from '@/icons/download/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { useContext } from 'react';

export function PublicSpacePostContents() {
  const attachmentListController = useContext(
    ContextForPostAttachmentListFromPost,
  );
  const fileAttachments = attachmentListController.state.objs.filter(
    (attachment) => attachment.variant === ElementVariant.FILE,
  );

  const downloadZip = async () => {
    const zip = new JSZip();

    const filePromises = fileAttachments.map(async (attachment, index) => {
      const url = attachment.fileElem?.src;
      if (url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${url}`);
        }
        const blob = await response.blob();

        const fileName = `${index + 1}-${attachment?.title || 'untitled'}.${attachment.fileElem?.ext.split('/')[1]}`;
        console.log(fileName);
        zip.file(fileName, blob);
      }
    });

    try {
      await Promise.all(filePromises);
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'attachments.zip');
    } catch (error) {
      console.error('Error creating zip file:', error);
    }
  };

  return (
    <>
      {attachmentListController.state.objs.length > 0 && (
        <GlassWindowFrame
          className='flex-shrink-0'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
            <div className='flex h-[5rem] w-full flex-row items-center space-x-[1rem] px-[2rem] shadow-glow'>
              <AstralDownloadIcon onClick={downloadZip} />
              <p className='font-bold text-slate-500'>
                {fileAttachments.length} ideas attached
              </p>
            </div>
            <div className='flex flex-wrap gap-[2rem] p-[2rem]'>
              {attachmentListController.state.objs.map((attachment, index) => (
                <ContextForPostAttachmentObj.Provider
                  value={attachment}
                  key={index}
                >
                  <div className='flex w-[300px] flex-shrink-0 flex-col space-y-[1rem]'>
                    <p className='text-xl font-bold text-slate-500'>
                      {attachment.title}
                    </p>
                    <ElementAttachment />
                  </div>
                </ContextForPostAttachmentObj.Provider>
              ))}
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      )}
    </>
  );
}
