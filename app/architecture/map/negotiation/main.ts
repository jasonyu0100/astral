import { negotiationModel } from '@/architecture/model/negotiation/main';
import { negotiationMemberModel } from '@/architecture/model/negotiation/member/main';
import { negotiationTermsModel } from '@/architecture/model/negotiation/terms/main';

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
