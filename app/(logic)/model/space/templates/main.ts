import { StarTemplateObj } from '@/(logic)/model/draft/constellation/star/main';
import { SpaceVariant } from '../main';
import { barTemplate } from './bar';
import { customTemplate } from './custom';
import { ideaTemplate } from './idea';
import { songMixTemplate } from './mix';
import { songSpaceTemplate } from './song';
import { MessageTemplateObj } from '@/(logic)/model/storm/chat/message/main';

export interface ChapterTemplateObj {
  title: string;
  description: string;
  chatTemplate?: ChatTemplateObj;
  constellationTemplate?: ConstellationTemplateObj;
}

export interface ChatTemplateObj {
  title: string;
  description: string;
  messages?: MessageTemplateObj[];
}

export interface ConstellationTemplateObj {
  title: string;
  description: string;
  variant: string;
  stars?: StarTemplateObj[];
}

export function getSpaceTemplate(variant: SpaceVariant): ChapterTemplateObj[] {
  switch (variant) {
    case SpaceVariant.SONG:
      return songSpaceTemplate;
    case SpaceVariant.MIX:
      return songMixTemplate;
    case SpaceVariant.BAR:
      return barTemplate;
    case SpaceVariant.IDEA:
      return ideaTemplate;
    case SpaceVariant.CUSTOM:
      return customTemplate;
  }
  return customTemplate;
}
