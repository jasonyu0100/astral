export interface BaseStateActions<TargetObj> {
  clear: () => void;
  update: (newObj: Partial<TargetObj>) => void;
}

export interface BaseGatherActions<TargetObj> {
  get: () => Promise<TargetObj>;
}

export interface BaseEditActions<TargetObj> {
  edit: (partialObj: Partial<TargetObj>) => Promise<TargetObj>;
  sync: () => Promise<TargetObj>
}

export interface BaseCreateActions<TargetObj> {
  duplicate: () => Promise<TargetObj>;
}

export interface BaseDeleteActions<TargetObj> {
  delete: () => Promise<TargetObj>;
}