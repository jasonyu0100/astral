import { FileElem } from '@/(server)/(model)/elements/file/main';
import { TextElem } from '@/(server)/(model)/elements/text/main';
import { UrlElem } from '@/(server)/(model)/elements/url/main';

export enum ValueVariant {
  TEXT = 'TEXT',
  AMOUNT = 'AMOUNT',
  ELEMENT = 'ELEMENT',
}

export interface ValueTerms {
  variant: string;
  text: string;
  amount: number;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
  agreement: boolean;
  settled: boolean;
  created: string;
}

//  I WANT THIS VALUE
