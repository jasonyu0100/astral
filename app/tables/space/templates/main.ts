import { SpaceVariant } from '../main';
import { barTemplate } from './bar';
import { ideaTemplate } from './idea';
import { songMixTemplate } from './mix';
import { songSpaceTemplate } from './song';

export interface ChapterTemplate {
  title: string;
  description: string;
}

export const spaceTemplates = {
  [SpaceVariant.MIX]: songMixTemplate,
  [SpaceVariant.SONG]: songSpaceTemplate,
  [SpaceVariant.BAR]: barTemplate,
  [SpaceVariant.IDEA]: ideaTemplate,
  [SpaceVariant.CUSTOM]: [],
};
