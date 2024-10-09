import { ideaDbWrapper } from '@/(server)/client/idea/main';
import { ideaRelationshipDbWrapper } from '@/(server)/client/idea/relationship/main';
import { ideaModel } from '@/(server)/model/idea/main';
import { ideaRelationshipModel } from '@/(server)/model/idea/relationship/main';

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
