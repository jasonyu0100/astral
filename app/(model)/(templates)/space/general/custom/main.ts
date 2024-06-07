import { exampleFileElems } from '@/(model)/elements/file/main';
import { CollectionResourceVariant } from '@/(model)/gallery/collection/resource/main';
import { TemplateChapterObj, TemplateSpaceObj } from '../../main';

export const customTemplate: TemplateSpaceObj = {
  title: 'Custom [edit me]',
  description: 'A custom template for a space.',
  category: 'General',
  chapters: [
    {
      title: 'Chapter One [edit me]',
      summary: 'The first chapter of the story.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Chapter Two [edit me]',
      summary: 'The second chapter of the story.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
    {
      title: 'Chapter Three [edit me]',
      summary: 'The third chapter of the story.',
      chatTemplates: [],
      sceneTemplates: [],
      verseTemplates: [],
      retroTemplates: [],
    },
  ],
};
