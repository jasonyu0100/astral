const baseUrl = `/live`;

export const liveMap = {
  live: {
    link: (id: string) => `${baseUrl}/${id}/`,
  },
  link: baseUrl,
};
