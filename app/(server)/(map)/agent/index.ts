import { agentDbWrapper } from '@/(server)/(db)/agent/main';
import { agentGql } from '../../(model)/agent/main';

export const agentMap = {
  children: [],
  gql: agentGql,
  db: agentDbWrapper,
};
