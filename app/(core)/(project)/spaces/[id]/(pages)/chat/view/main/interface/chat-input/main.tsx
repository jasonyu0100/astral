import { ContextForConversationMessageList } from '@/architecture/controller/conversation/message/list';
import { UserDisplayPictureElement } from '@/components/cover/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { useControllerForOpenAi } from '@/external/controller/openai/main';
import { AstralVoiceIcon } from '@/icons/voice/main';
import { glassFx, roundedFx } from '@/style/data';
import React, { useContext, useState } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarContentMode,
} from '../../../../controller/main';

export function SpacesChatInputText() {
  const messageListController = useContext(ContextForConversationMessageList);
  const openAiController = useControllerForOpenAi();
  const spacesChatController = useContext(ContextForSpacesChat);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );

  // Function to start recording
  const startRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('MediaDevices API not supported in your browser.');
      return;
    }
    console.log('Starting recording...');

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const audioChunks: Blob[] = [];

    recorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    recorder.onstop = async () => {
      console.log('Recording stopped.');
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      console.log('Audio Blob created, sending for transcription...');

      // Send audioBlob to the OpenAI API for transcription
      try {
        const transcript =
          await openAiController.actions.transcribeAudio(audioBlob);
        console.log('Transcription received:', transcript);
        if (transcript) {
          messageListController.actions.stateActions.updateInputMessageText(
            transcript,
          );
        }
      } catch (error) {
        console.error('Error during transcription:', error);
      }
    };

    recorder.start(); // Start the recorder
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  // Function to stop recording
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop(); // Stop the recording
      setIsRecording(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      spacesChatController.actions.sendMessageToConversation();
    }
  };

  return (
    <GlassWindowFrame
      className='h-[3.5rem] w-[600px]'
      roundedFx={roundedFx['rounded-full']}
    >
      <GlassWindowContents className='flex w-full flex-row items-center space-x-[1rem] pl-[1rem] pr-[1rem]'>
        <div
          className='cursor-pointer'
          onClick={() =>
            spacesChatController.actions.updateSidebarContentMode(
              SpacesChatSidebarContentMode.MEMBERS,
            )
          }
        >
          <UserDisplayPictureElement
            fileElem={spacesChatController.state.selectedUser?.dp}
          />
        </div>
        <input
          className={`h-full flex-grow bg-transparent text-slate-300 outline-none`}
          placeholder='Type a message...'
          onKeyDown={handleKeyDown}
          onChange={(e) =>
            messageListController.actions.stateActions.updateInputMessageText(
              e.target.value,
            )
          }
          value={messageListController.state.more.inputMessageText}
        />
        <div
          className={`flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full ${isRecording ? 'animate-pulse bg-red-500 bg-opacity-70' : 'bg-slate-300 bg-opacity-30'}`}
        >
          <AstralVoiceIcon
            onClick={() => {
              if (isRecording) {
                stopRecording();
                alert('Stopped recording');
              } else {
                startRecording();
                alert('Started recording');
              }
            }}
          />
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
