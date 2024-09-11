import { createContext, useState } from 'react';

export enum HorizonsArcRelevance {
  Top = '🚀 - Top',
  Core = '🔗 - Core',
  Entry = '🔑 - Entry',
  Global = '🌍 - Global',
  Connector = '🌉 - Connector',
}

export enum HorizonsArcType {
  Article = '📰 - Article',
  Video = '🎥 - Video',
  Podcast = '🎧 - Podcast',
  Archive = '📜 - Archive',
  Fresh = '🌱 - Fresh',
}

export enum HorizonsArcSource {
  Any = 'Any',
  Official = 'Official',
  UserGenerated = 'User Generated',
  ThirdParty = 'Third Party',
}

interface ControllerState {
  relevance: HorizonsArcRelevance;
  type: HorizonsArcType;
  source: HorizonsArcSource;
}

interface ControllerActions {
  updateRelevance: (relevance: HorizonsArcRelevance) => void;
  updateType: (type: HorizonsArcType) => void;
  updateSource: (source: HorizonsArcSource) => void;
}

interface Controller {
  state: ControllerState;
  actions: ControllerActions;
}

export const ContextForHorizonsArc = createContext({} as Controller);

export function useControllerForHorizonsArc() {
  const [relevance, setRelevance] = useState<HorizonsArcRelevance>(
    HorizonsArcRelevance.Top,
  );
  const [type, setType] = useState<HorizonsArcType>(HorizonsArcType.Article);
  const [source, setSource] = useState<HorizonsArcSource>(
    HorizonsArcSource.Any,
  );

  return {
    state: {
      relevance,
      type,
      source,
    },
    actions: {
      updateRelevance: (relevance: HorizonsArcRelevance) =>
        setRelevance(relevance),
      updateType: (type: HorizonsArcType) => setType(type),
      updateSource: (source: HorizonsArcSource) => setSource(source),
    },
  };
}
