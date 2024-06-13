import { agentDbWrapper } from '@/(server)/(db)/agent/main';
import { agentGql, agentModel } from '../../(model)/agent/main';

export const agentMap = {
  model: agentModel,
  db: agentDbWrapper,
};
