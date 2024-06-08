import { createContext, useMemo, useState } from 'react';

export interface BaseListStateActions<TargetObj> {
  select: (obj: TargetObj) => TargetObj;
  between: (start: Date, end: Date) => TargetObj[];
  sort: () => TargetObj[];
  goStart: () => TargetObj | undefined;
  goEnd: () => TargetObj | undefined;
  goNext: () => TargetObj | undefined;
  goPrev: () => TargetObj | undefined;
  search: () => TargetObj[];
}

export interface BaseListGatherActions<TargetObj> {
  gatherAll: () => Promise<TargetObj[]>;
  gatherFilter: () => Promise<TargetObj[]>;
  gatherSearch: (search: string) => Promise<TargetObj[]>;
}

export interface BaseListCreateActions<TargetObj> {
  create: () => Promise<TargetObj>;
  duplicate: (target: TargetObj) => Promise<TargetObj>;
}

export interface BaseListEditActions<TargetObj> {
  edit: (id: string, partialObj: Partial<TargetObj>) => Promise<TargetObj>;
}

export interface BaseListDeleteActions<TargetObj> {
  delete: (id: string) => Promise<TargetObj>;
  deleteMany: (ids: string[]) => Promise<TargetObj[]>;
}