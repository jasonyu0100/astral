import { agentDbWrapper } from '@/(model)/(db)/agent/main';
import { agentGql } from '@/(model)/agent/main';

export const userMap = {
  children: [],
  gql: agentGql,
  db: agentDbWrapper,
};
