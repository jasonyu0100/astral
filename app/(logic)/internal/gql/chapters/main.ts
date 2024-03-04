import { amplifyClient } from "@/(logic)/external/aws/graphql/main";
import { ChapterObj } from "@/(logic)/internal/data/infra/model/space/chapter/main";
import { createChapterObj } from "@/graphql/mutations";
import { listChapterObjs } from "@/graphql/queries";

export interface ChapterGqlHelper {
    queryListChapters: (spaceId: string) => Promise<ChapterObj[]>;
    queryCreateChapter: (title: string, description: string, idx: number, spaceId: string) => Promise<ChapterObj>;
}

export const gqlHelper : ChapterGqlHelper = {
    queryListChapters: async (spaceId: string) => {
      const payload = await amplifyClient.graphql({
        query: listChapterObjs,
        variables: {
          filter: {
            spaceId: {
              eq: spaceId,
            },
          },
        },
      });
      const chapters = payload.data?.listChapterObjs?.items as ChapterObj[] || [];
      const sortedChapters = chapters.sort((a, b) => a.idx - b.idx);
      return sortedChapters;
    },
    queryCreateChapter: async (title: string, description: string, idx: number, spaceId: string) => {
      const payload = await amplifyClient.graphql({
        query: createChapterObj,
        variables: {
          input: {
            title,
            description,
            spaceId,
            idx: idx
          },
        },
      });
      const chapter = payload.data?.createChapterObj as ChapterObj;
      return chapter;
    },
  };