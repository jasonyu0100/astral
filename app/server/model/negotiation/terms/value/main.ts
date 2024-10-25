import { FileElem } from '@/server/model/elements/file/main';
import { TextElem } from '@/server/model/elements/text/main';
import { UrlElem } from '@/server/model/elements/url/main';
import { createContext } from 'react';

export enum ValueTermsVariant {
  TEXT = 'TEXT',
  FLOAT = 'FLOAT',
  AMOUNT = 'AMOUNT',
  URL = 'URL',
  FILE_ELEMENT = 'FILE_ELEMENT',
  TEXT_ELEMENT = 'TEXT_ELEMENT',
  URL_ELEMENT = 'URL_ELEMENT',
}

export interface ValueTerms {
  variant: string;
  text?: string;
  float?: number;
  amount?: number;
  url?: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
  agreement: boolean;
  settled: boolean;
  created: string;
}

export const valueTermsGql = `
type ValueTerms {
variant: String!
text: String
amount: Int
float: Float
url: String
fileElem: FileElem
textElem: TextElem
urlElem: UrlElem
agreement: Boolean!
settled: Boolean!
created: String!
}

input ValueTermsInput {
variant: String!
text: String
amount: Int
float: Float
url: String
fileElem: FileElemInput
textElem: TextElemInput
urlElem: UrlElemInput
agreement: Boolean!
settled: Boolean!
created: String!
}
`;

export const ContextForValueTerms = createContext<ValueTerms>({} as ValueTerms);

export const exampleValueTerms: ValueTerms = {
  variant: ValueTermsVariant.TEXT,
  text: 'Example Value',
  settled: false,
  agreement: false,
  created: new Date().toISOString(),
};

export const exampleValueTermList: ValueTerms[] = [
  {
    variant: ValueTermsVariant.TEXT,
    text: 'Example Value',
    settled: false,
    agreement: false,
    created: new Date().toISOString(),
  },
  {
    variant: ValueTermsVariant.AMOUNT,
    amount: 10,
    settled: false,
    agreement: false,
    created: new Date().toISOString(),
  },
  {
    variant: ValueTermsVariant.URL,
    url: 'www.example.com',
    settled: false,
    agreement: false,
    created: new Date().toISOString(),
  },
];
