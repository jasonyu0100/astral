import { exampleProfileImageFileElem } from '@/(model)/elements/file/main';
import { UserObj } from '@/(model)/user/main';

export type TemplateUserObj = Omit<
  UserObj,
  | 'id'
  | 'passwordHash'
  | 'customerId'
  | 'subscriptionId'
  | 'priceId'
  | 'googleId'
  | 'created'
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
        fname: 'Musician',
        lname: 'Musician',
        email: 'music@music.com',
        profilePicture: exampleProfileImageFileElem,
        role: 'Musician',
        bio: 'I like music',
      };
    case UserTemplate.PRODUCER:
      return {
        fname: 'Producer',
        lname: 'Producer',
        email: 'producing@music.com',
        profilePicture: exampleProfileImageFileElem,
        role: 'Producer',
        bio: 'I like producing',
      };
    case UserTemplate.SINGER:
      return {
        fname: 'Singer',
        lname: 'Singer',
        email: 'singer@music.com',
        profilePicture: exampleProfileImageFileElem,
        role: 'Singer',
        bio: 'I like Singing',
      };
  }
}
