import { ideaDbWrapper } from '@/(server)/client/space/chapter/scene/idea/main';
import { ideaRelationshipDbWrapper } from '@/(server)/client/space/relationship/main';
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
