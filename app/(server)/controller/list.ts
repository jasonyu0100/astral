export interface BaseListStateActions<TargetObj> {
  select: (obj: TargetObj) => TargetObj;
  between: (start: Date, end: Date) => TargetObj[];
  sortedViaDate: (objs: TargetObj[]) => TargetObj[];
  sortedViaComparison: (
    objs: TargetObj[],
    comparison: (a: TargetObj, b: TargetObj) => number,
  ) => TargetObj[];
  goStart: () => TargetObj | undefined;
  goEnd: () => TargetObj | undefined;
  goNext: () => TargetObj | undefined;
  goPrev: () => TargetObj | undefined;
  searchQuery: () => TargetObj[];
  updateQuery: (newQuery: string) => void;
  executeQuery: (newQuery: string) => TargetObj[];
  checkActive: (obj: TargetObj) => boolean;
  find: (id: string) => TargetObj;
  pushFront: (obj: TargetObj) => void;
  pushBack: (obj: TargetObj) => void;
  pushIndex: (obj: TargetObj, index: number) => void;
  updateObj: (id: string, newObj: TargetObj) => void;
  deleteIds: (ids: string[]) => void;
}

export interface BaseListGatherActions<TargetObj> {
  gatherAll: () => Promise<TargetObj[]>;
  gatherLatest: () => Promise<TargetObj[]>;
  gatherEarliest: () => Promise<TargetObj[]>;
  gatherSearch: (search: string) => Promise<TargetObj[]>;
}

export interface BaseListCreateActions<TargetObj> {
  createEmpty: () => Promise<TargetObj>;
  duplicate: (target: TargetObj) => Promise<TargetObj>;
}

export interface BaseListEditActions<TargetObj> {
  edit: (id: string, partialObj: Partial<TargetObj>) => Promise<TargetObj>;
  sync: () => Promise<TargetObj[]>;
}

export interface BaseListDeleteActions<TargetObj> {
  delete: (id: string) => Promise<TargetObj>;
  deleteMany: (ids: string[]) => Promise<TargetObj[]>;
}
