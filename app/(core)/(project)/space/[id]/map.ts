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
      verses: {
        link: (id: string) => `${baseUrl}/${id}/verses`,
      },
      sessions: {
        link: (id: string) => `${baseUrl}/${id}/sessions`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
