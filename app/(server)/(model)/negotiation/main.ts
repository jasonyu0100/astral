export interface NegotiationObj {
  id: string;
  initiatorId: string; // userId
  receiverId: string; // userId
  settled: boolean; // in dispute or settled
  created: string;
}
