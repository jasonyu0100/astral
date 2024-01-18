export interface CommentObj {
  id: string;
  momentId: string;
  time: string;
  content: string;
  userId: string;
}

export const commentSchema = `
type CommentObj {
  id: String!
  momentId: String!
  time: String!
  content: String!
  userId: String!
}
`;

export const exampleComment: CommentObj = {
  id: '0',
  momentId: '0',
  time: new Date('2023-12-19').toISOString(),
  content: 'Hello World',
  userId: '0',
};

export const exampleComments: CommentObj[] = [exampleComment];
