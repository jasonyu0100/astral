export interface GqlDbWrapper<TargetType> {
  getObj: (id: string) => Promise<TargetType>;
  listObjs: (
    key: string,
    value: string | boolean | number,
  ) => Promise<TargetType[]>;
  listAllObjs(): Promise<TargetType[]>;
  createObj: (newObj: Omit<TargetType, 'id'>) => Promise<TargetType>;
  updateObj: (
    id: string,
    updateObj: Partial<TargetType>,
  ) => Promise<TargetType>;
  overwriteObj: (id: string, newObj: TargetType) => Promise<TargetType>;
  deleteObj: (id: string) => Promise<TargetType>;
  getFromVariables: (variables: object) => Promise<TargetType>;
  listFromVariables: (variables: object) => Promise<TargetType[]>;
}
