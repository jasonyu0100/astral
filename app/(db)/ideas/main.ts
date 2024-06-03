import { amplifyClient } from '@/(api)/aws/graphql/main';
import { IdeaObj } from '@/(model)/map/part/idea/main';
import { gqlArgs } from '@/(utils)/clean';
import {
  deleteIdeaObj,
  updateIdeaObj,
} from '@/graphql/mutations';
import { listIdeaObjs } from '@/graphql/queries';
import { IdeasCreateGqlHelperType, ideasCreateGqlHelper } from './create/main';

export interface IdeasGqlHelper {
  listFromPart: (partId: string) => Promise<IdeaObj[]>;
  create: IdeasCreateGqlHelperType;
  updateMany: (updatedIdeaObjs: IdeaObj[]) => Promise<IdeaObj[]>;
  update: (ideaId: string, updatedIdeaObj: IdeaObj) => Promise<IdeaObj>;
  delete: (ideaId: string) => Promise<IdeaObj>;
}

export const ideasGqlHelper: IdeasGqlHelper = {
  create: ideasCreateGqlHelper,
  listFromPart: async (partId: string) => {
    const payload = await amplifyClient.graphql({
      query: listIdeaObjs,
      variables: {
        filter: {
          partId: {
            eq: partId,
          },
        },
      },
    });
    const ideaObjs = (payload?.data.listIdeaObjs?.items as IdeaObj[]) || [];
    return ideaObjs;
  },
  updateMany: async (ideas: IdeaObj[]) => {
    const updatedIdeaObjs = await Promise.all(
      ideas.map(async (idea: IdeaObj) => {
        console.log(idea, gqlArgs(idea));
        const payload = await amplifyClient.graphql({
          query: updateIdeaObj,
          variables: {
            input: gqlArgs(idea),
          },
        });
        const updatedIdea = payload.data?.updateIdeaObj as IdeaObj;
        return updatedIdea;
      }),
    );
    return updatedIdeaObjs;
  },
  delete: async (ideaId: string) => {
    const payload = await amplifyClient.graphql({
      query: deleteIdeaObj,
      variables: {
        input: {
          id: ideaId,
        },
      },
    });
    const ideaObj = payload?.data?.deleteIdeaObj as IdeaObj;
    return ideaObj;
  },
  update: async (ideaId: string, updatedIdeaObj: IdeaObj) => {
    const payload = await amplifyClient.graphql({
      query: updateIdeaObj,
      variables: {
        input: gqlArgs({
          id: ideaId,
          title: updatedIdeaObj.title,
          description: updatedIdeaObj.description,
          x: updatedIdeaObj.x,
          y: updatedIdeaObj.y,
          variant: updatedIdeaObj.variant,
          file: updatedIdeaObj.file,
          log: updatedIdeaObj.log,
          link: updatedIdeaObj.link,
          note: updatedIdeaObj.note,
        }),
      },
    });
    const updatedIdea = payload?.data?.updateIdeaObj as IdeaObj;
    return updatedIdea;
  },
};
