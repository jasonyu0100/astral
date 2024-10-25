export interface ModelInterface<TargetObj> {
  name: string;
  gql: string;
  example: TargetObj;
  examples: TargetObj[];
  parentKey: string;
  children: string[];
}
