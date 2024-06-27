import moment from 'moment';
import { createContext } from 'react';

export interface TimeTerms {
  start: string;
  end: string;
  duration: string;
}

export const timeTermsGql = `
type TimeTerms {
  start: String!
  end: String!
  duration: String!
  }

input TimeTermsInput {
  start: String!
  end: String!
  duration: String!
}
`;

export const ContextForTimeTerms = createContext<TimeTerms>({} as TimeTerms);

export const exampleTimeTerms: TimeTerms = {
  start: new Date().toISOString(),
  end: moment(new Date()).add(1, 'year').toISOString(),
  duration: '1 year',
};

export const exampleTimeTermsList: TimeTerms[] = [
  {
    start: new Date().toISOString(),
    end: moment(new Date()).add(1, 'year').toISOString(),
    duration: '1 year',
  },
  {
    start: new Date().toISOString(),
    end: moment(new Date()).add(6, 'month').toISOString(),
    duration: '6 months',
  },
  {
    start: new Date().toISOString(),
    end: moment(new Date()).add(1, 'week').toISOString(),
    duration: '1 week',
  },
];
