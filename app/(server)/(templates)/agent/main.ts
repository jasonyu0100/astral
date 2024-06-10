import { AgentObj } from '@/(server)/(model)/agent/main';
import { exampleDisplayPictureFileElem } from '@/(server)/(model)/elements/file/main';

export type TemplateAgentObj = Omit<AgentObj, 'id' | 'created'>;

// TEMPLATES

export enum AgentTemplate {
  MUSICIAN = 'Musician',
  PRODUCER = 'Producer',
  SINGER = 'Singer',
}

export function getAgentTemplates(variant: AgentTemplate): TemplateAgentObj {
  switch (variant) {
    case AgentTemplate.MUSICIAN:
      return {
        name: 'Musician',
        role: 'Musician',
        bio: 'I like music',
        dp: exampleDisplayPictureFileElem,
      };
    case AgentTemplate.PRODUCER:
      return {
        name: 'Producer',
        role: 'Producer',
        bio: 'I like music',
        dp: exampleDisplayPictureFileElem,
      };
    case AgentTemplate.SINGER:
      return {
        name: 'Singer',
        role: 'Singer',
        bio: 'I like music',
        dp: exampleDisplayPictureFileElem,
      };
  }
}
