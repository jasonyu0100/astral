import { userDbWrapper } from '@/(server)/(db)/user/main';
import { userGql } from '../../(model)/user/main';
import { userReservationGql } from '../../(model)/user/reservation/main';
import { userReservationDbWrapper } from '@/(server)/(db)/user/reservation/main';
import { userCollaboratorGql } from '@/(server)/(model)/user/collaborator/main';
import { use } from 'react';
import { userCollaboratorDbWrapper } from '@/(server)/(db)/user/collaborator/main';
import { userSupporterDbWrapper } from '@/(server)/(db)/user/supporter/main';
import { userSupporterGql } from '@/(server)/(model)/user/supporter/main';

export const userMap = {
  children: ['reservation', 'collaborator', 'supporter'],
  gql: userGql,
  db: userDbWrapper,
  collaborator: {
    children: [],
    gql: userCollaboratorGql,
    db: userCollaboratorDbWrapper,
  },
  supporter: {
    children: [],
    gql: userSupporterGql,
    db: userSupporterDbWrapper,
  },
  reservation: {
    children: [],
    gql: userReservationGql,
    db: userReservationDbWrapper,
  },
};
