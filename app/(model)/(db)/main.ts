export interface GqlDbWrapper<TargetType> {
    getObj: (key: string, value: string) => Promise<TargetType>;
    listObjs: (key: string, value: string) => Promise<TargetType[]>;
    listAllObjs(): Promise<TargetType[]>;
    createObj: (newObj: Omit<TargetType, 'id'>) => Promise<TargetType>;
    updateObj: (id: string, updateObj: Partial<TargetType>) => Promise<TargetType>;
    overwriteObj: (id: string, newObj: TargetType) => Promise<TargetType>;
    deleteObj: (id: string) => Promise<TargetType>;
    getFromVariables: (variables: Object) => Promise<TargetType>;
    listFromVariables: (variables: Object) => Promise<TargetType[]>;
}