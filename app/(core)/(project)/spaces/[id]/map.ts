const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      scene: {
        link: (id: string) => `${baseUrl}/${id}/scene`,
      },
      board: {
        link: (id: string) => `${baseUrl}/${id}/board`,
      },
      page: {
        link: (id: string) => `${baseUrl}/${id}/page`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
