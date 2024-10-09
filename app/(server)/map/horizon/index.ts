import { horizonDbWrapper } from '@/(server)/client/horizon/main';
import { ideaRelationshipDbWrapper } from '@/(server)/client/idea/relationship/main';
import { horizonDecisionModel } from '@/(server)/model/horizon/decision/main';
import { decisionQuadrantModel } from '@/(server)/model/horizon/decision/quadrant/main';
import { quadrantMemberModel } from '@/(server)/model/horizon/decision/quadrant/member/main';
import { horizonModel } from '@/(server)/model/horizon/main';
import { horizonSpaceMemberModel } from '@/(server)/model/horizon/member/space/main';
import { horizonUserMemberModel } from '@/(server)/model/horizon/member/user/main';
import { ideaRelationshipModel } from '@/(server)/model/idea/relationship/main';
import { sceneMap } from '../scene';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
  arc: {
    tab: {
      scene: sceneMap,
    },
    way: {},
  },
  decision: {
    model: horizonDecisionModel,
    db: null,
    quadrant: {
      model: decisionQuadrantModel,
      db: null,
      member: {
        model: quadrantMemberModel,
        db: null,
      },
    },
  },
  member: {
    space: {
      model: horizonSpaceMemberModel,
      db: null,
    },
    user: {
      model: horizonUserMemberModel,
      db: null,
    },
  },
  relationship: {
    model: ideaRelationshipModel,
    db: ideaRelationshipDbWrapper,
  },
};
