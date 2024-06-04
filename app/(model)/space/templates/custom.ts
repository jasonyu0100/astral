import { SceneVariant } from '@/(model)/space/chapter/scene/main';
import { exampleFiles } from '@/(model)/media/resource/file/main';
import { ResourceVariant } from '@/(model)/media/resource/main';
import { ChapterTemplateObj } from './main';
import { MessageSource } from '@/(model)/space/chapter/chat/conversation/message/main';

export const customTemplate: ChapterTemplateObj[] = [
  {
    title: 'Chapter One [edit me]',
    description: 'The first chapter of the story.',
    chatTemplate: {
      title: 'Chapter One',
      description: 'Chat about chapter one.',
      messages: [
        {
          source: MessageSource.AGENT,
          message: 'Lets talk about your chapter one.',
        },
        {
          source: MessageSource.AGENT,
          message: 'How can I help?',
        },
      ],
    },
    partTemplate: {
      title: 'Vision',
      description: 'My vision board',
      variant: SceneVariant.VISUAL,
      ideas: [
        {
          title: 'Star 0',
          description: 'Twinkle twinkle little star',
          x: 120,
          y: 120,
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
        {
          title: 'Star 1',
          description: 'Twinkle twinkle little star',
          x: 240,
          y: 240,
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
        {
          title: 'Star 3',
          description: 'Twinkle twinkle little star',
          x: 120,
          y: 240,
          file: exampleFiles[0],
          variant: ResourceVariant.FILE,
        },
      ],
    },
  },
  {
    title: 'Chapter Two [edit me]',
    description: 'The second chapter of the story.',
  },
  {
    title: 'Chapter Three [edit me]',
    description: 'The third chapter of the story.',
  },
];
