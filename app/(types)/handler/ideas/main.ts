import { IdeaObj } from '@/(types)/model/map/part/idea/main';
import { FileObj } from '@/(types)/model/resource/file/main';
import { createContext, useMemo, useState } from 'react';
import { NoteObj } from '@/(types)/model/resource/note/main';
import { LogObj } from '@/(types)/model/resource/log/main';
import { LinkObj } from '@/(types)/model/resource/link/main';
import { toast } from 'sonner';
import { ideasGqlHelper } from '../../gql/ideas/main';
export interface IdeaActions {
  listIdeas: () => Promise<IdeaObj[]>;
  createFromFile: (
    title: string,
    description: string,
    x: number,
    y: number,
    file: FileObj,
  ) => Promise<IdeaObj>;
  createFromNote: (
    title: string,
    description: string,
    x: number,
    y: number,
    note: NoteObj,
  ) => Promise<IdeaObj>;
  createFromLink: (
    title: string,
    description: string,
    x: number,
    y: number,
    link: LinkObj,
  ) => Promise<IdeaObj>;
  createFromLog: (
    title: string,
    description: string,
    x: number,
    y: number,
    log: LogObj,
  ) => Promise<IdeaObj>;
  updateIdea: (ideaId: string, data: any) => void;
  updateIdeas: () => Promise<IdeaObj[]>;
  activateIdea: (ideaId: string) => void;
  deactivateIdea: () => void;
}

interface IdeasHandler {
  idea: IdeaObj | undefined;
  ideaId: string;
  ideas: IdeaObj[];
  ideaActions: IdeaActions;
}

export const IdeasHandlerContext = createContext({} as IdeasHandler);

export const useIdeasHandler = (partId: string): IdeasHandler => {
  const [ideas, changeIdeas] = useState<IdeaObj[]>([]);
  const [ideaId, changeIdeaId] = useState<string>('');

  const idea = ideas.filter((idea) => idea.id === ideaId).at(0);

  const ideaActions: IdeaActions = {
    listIdeas: async () => {
      const ideas = await ideasGqlHelper.listFromPart(partId);
      changeIdeas(ideas);
      changeIdeaId(ideas[0]?.id || '');
      return ideas;
    },
    createFromFile: async (
      title: string,
      description: string,
      x: number,
      y: number,
      file: FileObj,
    ) => {
      if (partId === '') {
        alert('No Part Active');
        return {} as IdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromFile(
        partId,
        title,
        description,
        x,
        y,
        file,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromNote: async (
      name: string,
      description: string,
      x: number,
      y: number,
      note: NoteObj,
    ) => {
      if (partId === '') {
        alert('No Part Active');
        return {} as IdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromNote(
        partId,
        name,
        description,
        x,
        y,
        note,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromLink: async (
      title: string,
      description: string,
      x: number,
      y: number,
      link: LinkObj,
    ) => {
      if (partId === '') {
        alert('No Part Active');
        return {} as IdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromLink(
        partId,
        title,
        description,
        x,
        y,
        link,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    createFromLog: async (
      title: string,
      description: string,
      x: number,
      y: number,
      log: LogObj,
    ) => {
      if (partId === '') {
        alert('No Part Active');
        return {} as IdeaObj;
      }
      const idea = await ideasGqlHelper.create.createFromLog(
        partId,
        title,
        description,
        x,
        y,
        log,
      );
      changeIdeas((prev) => [...prev, idea]);
      changeIdeaId(idea.id);
      return idea;
    },
    updateIdeas: async () => {
      const updatedIdeas = await ideasGqlHelper.updateMany(ideas);
      toast.success('Ideas Updated');
      return updatedIdeas;
    },
    activateIdea: (ideaId: string) => {
      changeIdeaId(ideaId);
    },
    deactivateIdea: () => {
      changeIdeaId('');
    },
    updateIdea: (ideaId: string, data: any) => {
      changeIdeas((prev) =>
        prev.map((idea) => (idea.id === ideaId ? { ...idea, ...data } : idea)),
      );
    },
  };

  useMemo(() => {
    if (partId == '') {
      changeIdeas([]);
      return;
    }
    ideaActions.listIdeas();
  }, [partId]);

  return {
    idea,
    ideaId,
    ideas,
    ideaActions: ideaActions,
  };
};
