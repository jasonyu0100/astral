import { PartObj } from '@/(model)/map/part/main';
import { createContext, useMemo, useState } from 'react';
import { partsGqlHelper } from '../../(db)/parts/main';

export interface PartActions {
  listParts: (id: string) => Promise<PartObj[]>;
  createPart: (
    title: string,
    description: string,
    variant: string,
  ) => Promise<PartObj>;
  updateParts: (
    parts: PartObj[],
  ) => PartObj[];
  updatePart: (part: PartObj) => PartObj;
  goToPart: (part: PartObj) => PartObj;
  addPart: (part: PartObj) => PartObj;
}

interface PartsHandler {
  part?: PartObj;
  parts: PartObj[];
  partId: string;
  partActions: PartActions;
}

export const PartsHandlerContext = createContext({} as PartsHandler);

export const usePartsHandler = (
  chapterId: string,
): PartsHandler => {
  const [parts, changeParts] = useState<PartObj[]>(
    [],
  );
  const [partId, changePartId] = useState<string>(
    parts.at(0)?.id || '',
  );

  const part = parts.find(
    (part) => part.id === partId,
  );

  const partActions: PartActions = {
    listParts: async (chapterId: string) => {
      const parts = await partsGqlHelper.listFromChapter(chapterId);
      changeParts(parts);
      changePartId(parts[0]?.id || '');
      return parts;
    },
    createPart: async (
      title: string,
      description: string,
      variant: string,
    ) => {
      const part = await partsGqlHelper.create(
        chapterId,
        title,
        description,
        variant,
      );
      changePartId(part.id);
      changeParts((prev) => [...prev, part]);
      return part;
    },
    updateParts: (parts: PartObj[]) => {
      changeParts(parts);
      changePartId(parts.at(0)?.id || '');
      return parts;
    },
    updatePart: (part: PartObj) => {
      changePartId(part.id);
      return part;
    },
    goToPart: (part: PartObj) => {
      changePartId(part.id);
      return part;
    },
    addPart: (part: PartObj) => {
      changePartId(part.id);
      changeParts((prev) => [...prev, part]);
      return part;
    },
  };
  useMemo(() => {
    if (!chapterId) {
      changeParts([]);
      return;
    }
    partActions.listParts(chapterId);
  }, [chapterId]);

  return {
    part: part,
    parts: parts,
    partId: partId,
    partActions: partActions,
  };
};
