import { agentDbWrapper } from '@/architecture/client/agent/main';
import { agentModel } from '../../(model)/agent/main';

export const agentMap = {
  model: agentModel,
  db: agentDbWrapper,
};
