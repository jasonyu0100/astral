const baseUrl = `/space`;

export const spaceMap = {
  space: {
    id: {
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      map: {
        link: (id: string) => `${baseUrl}/${id}/map`,
      },
      drafts: {
        link: (id: string) => `${baseUrl}/${id}/drafts`,
      },
      sessions: {
        link: (id: string) => `${baseUrl}/${id}/sessions`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
