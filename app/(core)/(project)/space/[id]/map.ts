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
      progress: {
        link: (id: string) => `${baseUrl}/${id}/progress`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
