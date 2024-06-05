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
import { spaceGql } from "./main";

export const spaceMap = {
    children: ['chapter'],
    gql: spaceGql,
    chapter: {
        gql: spaceChapterGql,
        children: ['chat', 'retro', 'scene', 'verse'],
        chat: {
            gql: chapterChatGql, 
            children: ['conversation'],
            conversation: {
                gql: chatConversationGql,
                children: ['message'],
                message: {
                    gql: conversationMessageGql,
                }
            },
        },
        retro: {
            gql: chapterRetroGql,
            children: ['contribution'],
            contribution: {
                gql: retroContributionGql,
            }
        },
        scene: {
            gql: chapterSceneGql,
            children: ['idea'],
            idea: {
                gql: sceneIdeaGql,
            }
        },
        verse: {
            gql: chapterVerseGql,
            children: ['comment'],
            comment: {
                gql: verseCommentGql
            }
        }
    }
}