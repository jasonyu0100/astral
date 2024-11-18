const baseUrl = `/spaces`;

export const spacesMap = {
  spaces: {
    id: {
      focus: {
        link: (id: string) => `${baseUrl}/${id}/focus`,
      },
      chat: {
        link: (id: string) => `${baseUrl}/${id}/chat`,
      },
      ideas: {
        link: (id: string) => `${baseUrl}/${id}/ideas`,
      },
      updates: {
        link: (id: string) => `${baseUrl}/${id}/updates`,
      },
      link: (id: string) => `${baseUrl}/${id}`,
    },
    link: baseUrl,
  },
};
