import { flowDbWrapper } from '@/architecture/client/flow/main';
import { flowModel } from '@/architecture/model/flow/main';

export const flowMap = {
  model: flowModel,
  db: flowDbWrapper,
};
