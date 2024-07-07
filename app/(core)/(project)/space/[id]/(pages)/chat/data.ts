export enum ChatRole {
  Designer = 'Designer',
  Developer = 'Junior Developer',
  Reviewer = 'Reviewer',
}

export const roleDescriptions: { [key in ChatRole]: string } = {
  [ChatRole.Designer]:
    'As a Designer at [Big Tech Company], you will be an integral part of our dynamic and innovative team, responsible for creating visually stunning and highly functional designs that enhance user experience and drive engagement across our products. You will collaborate closely with cross-functional teams, including product managers, engineers, and other designers, to bring ideas to life and ensure our products meet the highest standards of quality and usability.',
  [ChatRole.Developer]:
    'As a Junior Software Engineer at [Big Tech Company], you will join a talented and passionate team dedicated to building high-quality software solutions. This is an exciting opportunity to kick-start your career, gain hands-on experience, and grow your skills in a collaborative and innovative environment. You will work closely with senior engineers, product managers, and designers to develop, test, and maintain software applications that enhance user experience and drive business success.',
  [ChatRole.Reviewer]:
    'As a Software Reviewer at [Big Tech Company], you will play a critical role in ensuring the quality, functionality, and performance of our software products. Your keen eye for detail and strong analytical skills will be essential in evaluating software applications, identifying potential issues, and providing actionable feedback to developers. You will collaborate with various teams to uphold the highest standards of software quality, contributing to the overall success and reliability of our products.',
};
