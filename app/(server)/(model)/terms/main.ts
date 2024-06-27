export enum TermsVariant {
  TIME = 'TIME',
  VALUE = 'VALUE',
  INFORMATION = 'INFORMATION',
}

export interface TermsObj {
  id: string;
  negotiationId?: string;
  initiatorId: string;
  receiverId: string;
  title: string;
  description: string;
  agreement: boolean;
  settled: boolean;
  created: string;
  variant: string;
  informationTerms?: object;
  valueTerms?: object;
  timeTerms?: object;
}
