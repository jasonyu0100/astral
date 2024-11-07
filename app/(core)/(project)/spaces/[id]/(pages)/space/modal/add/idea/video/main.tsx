import { ContextForUserActivityListFromChapter } from '@/architecture/controller/activity/list-from-chapter';
import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import {
  exampleFileElement,
  FileElementVariant,
} from '@/architecture/model/elements/file/main';
import { ElementVariant } from '@/architecture/model/elements/main';
import { ContextForIdeaObj, exampleIdea } from '@/architecture/model/idea/main';
import { ContextForLoggedInUserObj } from '@/architecture/model/user/main';
import { AstralRoundedActionButton } from '@/components/button/action/main';
import { ElementIdea } from '@/components/element/idea/main';
import { AstralModalBodyContents } from '@/components/modal/astral/body/action/main';
import { AstralModalBodyAction } from '@/components/modal/astral/body/contents/main';
import { AstralModalBody } from '@/components/modal/astral/body/main';
import { AstralModal } from '@/components/modal/astral/main';
import { AstralModalBodyWrapper } from '@/components/modal/astral/wrapper/main';
import { AstralModalStep } from '@/components/step/main';
import { useS3UploadController } from '@/external/controller/s3/single/main';
import { AstralCheckIcon } from '@/icons/check/main';
import { AstralCloseIcon } from '@/icons/close/main';
import { AstralPlayIcon } from '@/icons/play/main';
import { AstralStopIcon } from '@/icons/stop/main';
import { AstralUploadIcon } from '@/icons/upload/main';
import { ContextForOpenable } from '@/logic/contexts/openable/main';
import { getFileIdeaBounds } from '@/utils/bounds';
import { ChangeEvent, useContext, useState } from 'react';

export function SpacesSpaceAddFileVideoIdeaModal() {
  const user = useContext(ContextForLoggedInUserObj);
  const spaceController = useContext(ContextForSpaceMain);
  const openableController = useContext(ContextForOpenable);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const ideaListController = useContext(ContextForSceneIdeaList);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const activityListController = useContext(
    ContextForUserActivityListFromChapter,
  );

  const { fileElem, uploadActions } = useS3UploadController();
  const [recording, setRecording] = useState<MediaRecorder | null>(null);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => setVideoBlob(e.data);
        mediaRecorder.start();
        setRecording(mediaRecorder);
        setVideoStream(stream);
      });
  };

  const stopRecording = () => {
    if (recording) {
      recording.stop();
      videoStream?.getTracks().forEach((track) => track.stop()); // Stop the video stream
      setRecording(null);
    }
  };

  const uploadVideoToS3 = async () => {
    if (!videoBlob) return;

    // Create a File from the Blob to upload
    const videoFile = new File([videoBlob], `video-${Date.now()}.mp4`, {
      type: 'video/mp4',
    });
    const event = {
      target: { files: [videoFile] },
    } as ChangeEvent<HTMLInputElement>;

    await uploadActions.uploadFile(event); // Upload the video file
  };

  async function createFileIdea() {
    if (!fileElem.id) {
      alert('Please upload or record a file first.');
      return;
    }

    const { width, height } = getFileIdeaBounds(fileElem);

    const idea =
      await ideaListController.actions.createActions.createIdeaFromFileElement(
        user.id,
        sceneListController.state.objId,
        fileElem.title,
        '',
        Math.ceil(Math.random() * 200),
        Math.ceil(Math.random() * 200),
        width,
        height,
        fileElem,
        ideaListController.state.objs.length,
      );

    await activityListController.actions.createActions.createFromChapterSceneIdea(
      user.id,
      spaceController.state.objId,
      chapterListController.state.objId,
      ideaListController.state.objId,
      idea.id,
    );

    openableController.close();
  }

  return (
    <ContextForOpenable.Provider value={openableController}>
      <AstralModal>
        <AstralModalBodyWrapper>
          <AstralModalBody>
            <AstralModalBodyContents>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <AstralModalStep>1</AstralModalStep>
                <div className='flex flex-row items-center space-y-4'>
                  <div className='flex flex-row items-center space-x-[1rem] rounded-full bg-slate-300 bg-opacity-30 p-[2rem]'>
                    {!recording ? (
                      <AstralPlayIcon
                        className='h-[2rem] w-[2rem]'
                        onClick={() => {
                          if (!recording && !videoBlob) {
                            startRecording();
                          } else {
                            if (videoBlob) alert('Already recorded.');
                            else alert('Already recording.');
                          }
                        }}
                      />
                    ) : (
                      <AstralStopIcon
                        className='h-[2rem] w-[2rem]'
                        onClick={() => {
                          if (recording) {
                            stopRecording();
                          } else {
                            alert('No recording to stop.');
                          }
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Mirror Preview Video */}
                {recording && videoStream && (
                  <video
                    autoPlay
                    muted
                    className='rounded-[1rem]'
                    style={{
                      transform: 'scaleX(-1)', // Mirror effect
                      width: '500px', // Adjust size as necessary
                      height: 'auto',
                    }}
                    ref={(videoElement) => {
                      if (videoElement) {
                        videoElement.srcObject = videoStream;
                      }
                    }}
                  />
                )}

                {!recording && videoBlob && (
                  <>
                    <AstralModalStep>2</AstralModalStep>
                    <ContextForIdeaObj.Provider
                      value={{
                        ...exampleIdea,
                        variant: ElementVariant.FILE,
                        fileElem: {
                          ...exampleFileElement,
                          variant: FileElementVariant.VIDEO,
                          src:
                            videoBlob instanceof Blob
                              ? URL.createObjectURL(videoBlob)
                              : '',
                        },
                      }}
                    >
                      <ElementIdea />
                    </ContextForIdeaObj.Provider>
                    <div className='flex flex-col items-center space-y-[1rem] rounded-full bg-slate-300 bg-opacity-30 p-[2rem]'>
                      <AstralUploadIcon
                        className='h-[2rem] w-[2rem]'
                        onClick={uploadVideoToS3}
                      />
                      <AstralCloseIcon
                        className='h-[2rem] w-[2rem]'
                        onClick={() => {
                          setVideoBlob(null);
                          uploadActions.clearFile();
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </AstralModalBodyContents>
            <AstralModalBodyAction>
              {fileElem.id && (
                <AstralRoundedActionButton onClick={createFileIdea}>
                  <AstralCheckIcon />
                </AstralRoundedActionButton>
              )}
            </AstralModalBodyAction>
          </AstralModalBody>
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
