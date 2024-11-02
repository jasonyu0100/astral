import { ideaDbWrapper } from '@/architecture/client/idea/main';
import { ideaRelationshipDbWrapper } from '@/architecture/client/idea/relationship/main';
import { ideaModel } from '@/architecture/model/idea/main';
import { ideaRelationshipModel } from '@/architecture/model/idea/relationship/main';

export const ideaMap = {
  idea: {
    model: ideaModel,
    db: ideaDbWrapper,
    relationship: {
      model: ideaRelationshipModel,
      db: ideaRelationshipDbWrapper,
    },
  },
};
