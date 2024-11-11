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

    // Create an array to hold the valid file promises
    const validFilePromises = fileAttachments.map(async (attachment, index) => {
      const url = attachment.fileElem?.src;
      if (url) {
        try {
          const response = await fetch(url, { mode: 'cors' });
          if (!response.ok) {
            throw new Error(`Failed to fetch file: ${url}`);
          }
          const blob = await response.blob();

          // Determine the file name from attachment details
          const fileName = `${index + 1}-${attachment?.title || 'untitled'}.${attachment.fileElem?.ext.split('/')[1]}`;

          // Return the file promise with the name and blob
          return { fileName, blob };
        } catch (error) {
          console.error('Error fetching file:', error);
          return null; // Return null for failed fetches
        }
      }
      return null; // Return null if no URL is found
    });

    try {
      // Wait for all the file promises to settle
      const fetchedFiles = await Promise.all(validFilePromises);

      // Filter out any failed fetches (nulls)
      const validFiles = fetchedFiles.filter((file) => file !== null);

      if (validFiles.length > 0) {
        // Add valid files to the zip
        validFiles.forEach(({ fileName, blob }) => {
          zip.file(fileName, blob);
        });

        // Generate the zip blob and save it
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        saveAs(zipBlob, 'attachments.zip');
      } else {
        console.error('No valid files to zip.');
      }
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
              <p className='font-bold text-slate-400'>
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
                    <GlassWindowFrame borderFx={borderFx['border-b']}>
                      <GlassWindowContents className='flex'>
                        <p className='text-lg font-bold text-slate-400'>
                          {attachment?.title || 'untitled'}
                        </p>
                      </GlassWindowContents>
                    </GlassWindowFrame>
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
