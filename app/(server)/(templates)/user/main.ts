import { exampleDisplayPictureFileElem } from '@/(server)/(model)/elements/file/main';
import { UserObj } from '@/(server)/(model)/user/main';

export type TemplateUserObj = Omit<
  UserObj,
  | 'id'
  | 'passwordHash'
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
        dp: exampleDisplayPictureFileElem,
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
        dp: exampleDisplayPictureFileElem,
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
        dp: exampleDisplayPictureFileElem,
        role: 'Singer',
        bio: 'I like Singing',
        degree: 3,
      };
  }
}
