import { StarTemplateObj } from '@/tables/draft/constellation/star/main';
import { SpaceVariant } from '../main';
import { barTemplate } from './bar';
import { customTemplate } from './custom';
import { ideaTemplate } from './idea';
import { songMixTemplate } from './mix';
import { songSpaceTemplate } from './song';

export interface ChapterTemplateObj {
  title: string;
  description: string;
  chatTemplate?: ChatTemplateObj;
  constellationTemplate?: ConstellationTemplateObj;
}

export interface ChatTemplateObj {
  title: string;
  description: string;
  messages?: string[];
}

export interface ConstellationTemplateObj {
  title: string;
  description: string;
  variant: string;
  stars?: StarTemplateObj[];
}

export const spaceTemplates = {
  [SpaceVariant.MIX]: songMixTemplate,
  [SpaceVariant.SONG]: songSpaceTemplate,
  [SpaceVariant.BAR]: barTemplate,
  [SpaceVariant.IDEA]: ideaTemplate,
  [SpaceVariant.CUSTOM]: customTemplate,
};
