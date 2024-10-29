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
      pages: {
        link: (id: string) => `${baseUrl}/${id}/pages`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
