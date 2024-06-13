export interface ModelInterface<TargetObj> {
    name: any;
    gql: string;
    example: TargetObj;
    examples: TargetObj[];
    parentKey: string;
    children: string[];
}