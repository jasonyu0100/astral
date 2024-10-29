const baseUrl = `/public`;

export const publicSpaceMap = {
  space: {
    link: (id: string) => `${baseUrl}/${id}/`,
  },
  link: baseUrl,
};
