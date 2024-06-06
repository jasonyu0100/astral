import { UserObj } from "@/(model)/user/main";

export type TemplateUser = Omit<UserObj, 'id' | 'passwordHash' | 'customerId' | 'subscriptionId' | 'priceId' | 'googleId' | 'created'>;

// TEMPLATES

export enum SpaceTemplate {
  MIX = 'MIX',
  SONG = 'SONG',
  BAR = 'BAR',
  IDEA = 'IDEA',
  CUSTOM = 'CUSTOM',
}


export function getUserTemplate(user: UserObj): TemplateUser {
  return {
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    profilePicture: user.profilePicture,
  };
}