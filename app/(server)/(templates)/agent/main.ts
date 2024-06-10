import { AgentObj } from '@/(model)/agent/main';

export type TemplateAgentObj = Omit<AgentObj, 'id' | 'created'>;

// TEMPLATES

export enum UserTemplate {
  MUSICIAN = 'Musician',
  PRODUCER = 'Producer',
  SINGER = 'Singer',
}

export function getUserTemplates(variant: UserTemplate): TemplateAgentObj {
  switch (variant) {
    case UserTemplate.MUSICIAN:
      return {
        name: 'Musician',
        role: 'Musician',
        bio: 'I like music',
      };
    case UserTemplate.PRODUCER:
      return {
        name: 'Producer',
        role: 'Producer',
        bio: 'I like music',
      };
    case UserTemplate.SINGER:
      return {
        name: 'Singer',
        role: 'Singer',
        bio: 'I like music',
      };
  }
}
