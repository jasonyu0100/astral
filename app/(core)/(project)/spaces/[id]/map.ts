const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      direction: {
        link: (id: string) => `${baseUrl}/${id}/direction`,
      },
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      scene: {
        link: (id: string) => `${baseUrl}/${id}/scene`,
      },
      updates: {
        link: (id: string) => `${baseUrl}/${id}/updates`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
