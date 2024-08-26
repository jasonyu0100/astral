import { negotiationModel } from '@/(server)/model/negotiation/main';
import { negotiationMemberModel } from '@/(server)/model/negotiation/member/main';
import { negotiationTermsModel } from '@/(server)/model/negotiation/terms/main';

export const negotiationMap = {
  model: negotiationModel,
  db: null,
  member: {
    model: negotiationMemberModel,
    db: null,
  },
  terms: {
    model: negotiationTermsModel,
    db: null,
  },
};
