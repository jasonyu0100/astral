const baseUrl = `/user`;

export const userProfileMap = {
  profile: {
    link: (id: string) => `${baseUrl}/${id}/profile`,
  },
  link: baseUrl,
};
