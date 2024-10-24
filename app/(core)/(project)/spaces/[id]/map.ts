const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      view: {
        link: (id: string) => `${baseUrl}/${id}/view`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      post: {
        link: (id: string) => `${baseUrl}/${id}/post`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
