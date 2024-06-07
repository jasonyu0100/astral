import { userDbWrapper } from '@/(model)/(db)/user/main';
import { userGql } from '../../user/main';
import { userReservationGql } from '../../user/reservation/main';
import { reservationDbWrapper } from '@/(model)/(db)/user/reservation/main';
import { userCollaboratorGql } from '@/(model)/user/collaborator/main';
import { use } from 'react';
import { userCollaboratorDbWrapper } from '@/(model)/(db)/user/collaborator/main';
import { userSupporterDbWrapper } from '@/(model)/(db)/user/supporter/main';
import { userSupporterGql } from '@/(model)/user/supporter/main';

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
    db: reservationDbWrapper,
  },
};
