import { IdeaTemplateObj } from '@/(model)/space/chapter/scene/idea/main';
import { SpaceVariant } from '../main';
import { barTemplate } from './bar';
import { customTemplate } from './custom';
import { ideaTemplate } from './idea';
import { songMixTemplate } from './mix';
import { songSpaceTemplate } from './song';
import { MessageTemplateObj } from '@/(model)/space/chapter/chat/conversation/message/main';

export interface ChapterTemplateObj {
  title: string;
  description: string;
  chatTemplate?: ChatTemplateObj;
  partTemplate?: SceneTemplateObj;
}

export interface ChatTemplateObj {
  title: string;
  description: string;
  messages?: MessageTemplateObj[];
}

export interface SceneTemplateObj {
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
