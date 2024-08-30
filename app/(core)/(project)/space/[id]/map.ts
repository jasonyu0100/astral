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
      journey: {
        link: (id: string) => `${baseUrl}/${id}/journey`,
      },
      spotlight: {
        link: (id: string) => `${baseUrl}/${id}/spotlight`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
