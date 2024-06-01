import { IdeaTemplateObj } from '@/(types)/model/map/part/idea/main';
import { SpaceVariant } from '../main';
import { barTemplate } from './bar';
import { customTemplate } from './custom';
import { ideaTemplate } from './idea';
import { songMixTemplate } from './mix';
import { songSpaceTemplate } from './song';
import { MessageTemplateObj } from '@/(types)/model/storm/chat/message/main';

export interface ChapterTemplateObj {
  title: string;
  description: string;
  chatTemplate?: ChatTemplateObj;
  partTemplate?: PartTemplateObj;
}

export interface ChatTemplateObj {
  title: string;
  description: string;
  messages?: MessageTemplateObj[];
}

export interface PartTemplateObj {
  title: string;
  description: string;
  variant: string;
  ideas?: IdeaTemplateObj[];
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
