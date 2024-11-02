import { exampleDisplayPictureFileElement } from '@/architecture/model/elements/file/main';
import { UserObj } from '@/architecture/model/user/main';

export type TemplateUserObj = Omit<
  UserObj,
  | 'id'
  | 'passwordHash'
  | 'polarHash'
  | 'writtenHash'
  | 'customerId'
  | 'subscriptionId'
  | 'priceId'
  | 'created'
  | 'journalId'
  | 'private'
>;

// TEMPLATES

export enum UserTemplate {
  MUSICIAN = 'Musician',
  PRODUCER = 'Producer',
  SINGER = 'Singer',
}

export function getUserTemplates(variant: UserTemplate): TemplateUserObj {
  switch (variant) {
    case UserTemplate.MUSICIAN:
      return {
        displayName: 'Musician',
        fname: 'Musician',
        lname: 'Musician',
        email: 'music@music.com',
        dp: exampleDisplayPictureFileElement,
        role: 'Musician',
        bio: 'I like music',
        degree: 0,
      };
    case UserTemplate.PRODUCER:
      return {
        displayName: 'Musician',
        fname: 'Producer',
        lname: 'Producer',
        email: 'producing@music.com',
        dp: exampleDisplayPictureFileElement,
        role: 'Producer',
        bio: 'I like producing',
        degree: 5,
      };
    case UserTemplate.SINGER:
      return {
        displayName: 'Musician',
        fname: 'Singer',
        lname: 'Singer',
        email: 'singer@music.com',
        dp: exampleDisplayPictureFileElement,
        role: 'Singer',
        bio: 'I like Singing',
        degree: 3,
      };
  }
}
