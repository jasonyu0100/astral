export interface BaseListStateActions<TargetObj> {
  select: (obj: TargetObj) => TargetObj;
  selectViaId: (id: string, objs?: TargetObj[]) => TargetObj;
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
  searchAndUpdateQuery: (
    newQuery: string,
    newObjs?: TargetObj[],
  ) => TargetObj[];
  checkActive: (obj: TargetObj) => boolean;
  find: (id: string) => TargetObj;
  pushFront: (obj: TargetObj) => TargetObj[];
  pushBack: (obj: TargetObj) => TargetObj[];
  pushIndex: (obj: TargetObj, index: number) => TargetObj[];
  updateObj: (id: string, newObj: TargetObj) => TargetObj[];
  deleteIds: (ids: string[]) => void;
}

export interface BaseListGatherActions<TargetObj> {
  gatherAll: () => Promise<TargetObj[]>;
  gatherFromEnd: () => Promise<TargetObj[]>;
  gatherFromBeginning: () => Promise<TargetObj[]>;
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
