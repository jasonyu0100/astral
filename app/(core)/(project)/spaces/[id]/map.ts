const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      progress: {
        link: (id: string) => `${baseUrl}/${id}/progress`,
      },
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      scene: {
        link: (id: string) => `${baseUrl}/${id}/scene`,
      },
      inbox: {
        link: (id: string) => `${baseUrl}/${id}/inbox`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
