import { chatConversationGql } from "./chapter/chat/conversation/main";
import { conversationMessageGql } from "./chapter/chat/conversation/message/main";
import { chapterChatGql } from "./chapter/chat/main";
import { spaceChapterGql } from "./chapter/main";
import { retroContributionGql } from "./chapter/retro/contribution/main";
import { chapterRetroGql } from "./chapter/retro/main";
import { sceneIdeaGql } from "./chapter/scene/idea/main";
import { chapterSceneGql } from "./chapter/scene/main";
import { verseCommentGql } from "./chapter/verse/comment/main";
import { chapterVerseGql } from "./chapter/verse/main";

export const spaceGqlMap = {
    chapter: {
        gql: spaceChapterGql,
        chat: {
            gql: chapterChatGql, 
            conversation: {
                gql: chatConversationGql,
                message: {
                    gql: conversationMessageGql,
                }
            },
        },
        retro: {
            gql: chapterRetroGql,
            contribution: {
                gql: retroContributionGql,
            }
        },
        scene: {
            gql: chapterSceneGql,
            idea: {
                gql: sceneIdeaGql,
            }
        },
        verse: {
            gql: chapterVerseGql,
            comment: {
                gql: verseCommentGql
            }
        }
    }
}