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
import { useContext, useState } from 'react';

export function SpacesSpaceAddFileAudioIdeaModal() {
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
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => setAudioBlob(e.data);
      mediaRecorder.start();
      setRecording(mediaRecorder);
    });
  };

  const stopRecording = () => {
    if (recording) {
      recording.stop();
      setRecording(null);
    }
  };

  const uploadAudioToS3 = async () => {
    if (!audioBlob) return;

    // Create a File from the Blob to upload
    const audioFile = new File([audioBlob], `audio-${Date.now()}.wav`, {
      type: 'audio/wav',
    });
    const event = {
      target: { files: [audioFile] },
    } as ChangeEvent<HTMLInputElement>;

    await uploadActions.uploadFile(event); // Upload the audio file
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
          <AstralModalBodyContents>
            <div className='flex flex-row items-center space-x-[2rem]'>
              <AstralModalStep>1</AstralModalStep>
              <div className='flex flex-row items-center space-y-4'>
                <div className='flex flex-row items-center space-x-[1rem] rounded-full bg-slate-300 bg-opacity-30 p-[2rem]'>
                  {!recording ? (
                    <AstralPlayIcon
                      className='h-[2rem] w-[2rem]'
                      onClick={() => {
                        if (!recording && !audioBlob) {
                          startRecording();
                        } else {
                          if (audioBlob) alert('Already recorded.');
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
              {!recording && audioBlob && (
                <>
                  <AstralModalStep>2</AstralModalStep>
                  <ContextForIdeaObj.Provider
                    value={{
                      ...exampleIdea,
                      variant: ElementVariant.FILE,
                      fileElem: {
                        ...exampleFileElement,
                        variant: FileElementVariant.AUDIO,
                        src:
                          audioBlob instanceof Blob
                            ? URL.createObjectURL(audioBlob)
                            : '',
                      },
                    }}
                  >
                    <ElementIdea />
                  </ContextForIdeaObj.Provider>
                  <div className='flex flex-row items-center space-x-[1rem] rounded-full bg-slate-300 bg-opacity-30 p-[2rem]'>
                    <AstralUploadIcon
                      className='h-[2rem] w-[2rem]'
                      onClick={uploadAudioToS3}
                    />
                    <AstralCloseIcon
                      className='h-[2rem] w-[2rem]'
                      onClick={() => setAudioBlob(null)}
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
        </AstralModalBodyWrapper>
      </AstralModal>
    </ContextForOpenable.Provider>
  );
}
