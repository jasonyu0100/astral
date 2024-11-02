import { horizonDbWrapper } from '@/architecture/client/horizon/main';
import { ideaRelationshipDbWrapper } from '@/architecture/client/idea/relationship/main';
import { horizonDecisionModel } from '@/architecture/model/horizon/decision/main';
import { decisionQuadrantModel } from '@/architecture/model/horizon/decision/quadrant/main';
import { quadrantMemberModel } from '@/architecture/model/horizon/decision/quadrant/member/main';
import { horizonModel } from '@/architecture/model/horizon/main';
import { horizonSpaceMemberModel } from '@/architecture/model/horizon/member/space/main';
import { horizonUserMemberModel } from '@/architecture/model/horizon/member/user/main';
import { ideaRelationshipModel } from '@/architecture/model/idea/relationship/main';
import { sceneMap } from '../scene';

export const horizonMap = {
  model: horizonModel,
  db: horizonDbWrapper,
  arc: {
    tab: {
      scene: sceneMap,
    },
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
