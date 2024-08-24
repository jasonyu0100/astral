export enum ChatRole {
  Marketer = 'Marketer',
  Leader = 'Leader',
  Artist = 'Artist',
  Director = 'Director',
  Rapper = 'Rapper',
  Producer = 'Producer',
  Designer = 'Designer',
  Technician = 'Technician',
  Singer = 'Singer',
  Writer = 'Writer',
}

export const roleDescriptions: { [key in ChatRole]: string } = {
  [ChatRole.Marketer]: `A marketer promotes a song to reach a wider audience,
    using strategies like social media, advertising, and public relations.
    They help build a fanbase and generate buzz around the song`,
  [ChatRole.Leader]: `A community leader engages with fans and builds a community around a song,
    fostering connections between artists and listeners.
    They create a welcoming space for fans to share their love for the music and connect with each other`,
  [ChatRole.Artist]: `An artist creates music, writing lyrics and composing melodies to express their emotions and ideas.
    They collaborate with other artists and producers to bring their vision to life, sharing their unique voice and perspective with the world`,
  [ChatRole.Rapper]: `A rapper contributes to a song by composing and performing its rap verses,
    using rhythm and wordplay to tell a story or convey emotions.
    They collaborate with singers, songwriters, and producers to ensure their verses complement the song's overall message and mood`,
  [ChatRole.Designer]: `A designer creates visual assets like album covers, promotional materials, and merchandise,
    helping to establish a cohesive brand identity for an artist or song.
    They use their creativity and technical skills to bring the artist's vision to life in a visually compelling way`,
  [ChatRole.Technician]: `A technician handles the technical aspects of music production,
    using software tools to mix and master songs, ensuring they sound polished and professional.
    They work closely with producers and artists to achieve the desired sound and quality for a song`,
  [ChatRole.Director]: `A director oversees the creation of a music video,
    working with artists and production teams to bring the song's story to life visually.
    They handle creative decisions like casting, location scouting, and editing, ensuring the video aligns with the song's message and mood`,
  [ChatRole.Producer]: `A music producer oversees the creation of a song using software tools, 
    shaping its sound and structure. They handle technical aspects like mixing and mastering, 
    ensuring the song meets artistic and technical standards.`,
  [ChatRole.Singer]: `A singer contributes to a song by composing and performing its vocal parts, 
    including verses and choruses. They bring the lyrics to life with their voice, 
    often collaborating closely with songwriters and producers.`,
  [ChatRole.Writer]: `A writer contributes to a song by crafting its lyrics and sometimes its melody, 
    telling a story or conveying emotions through words. 
    They collaborate with singers and producers to ensure the song's narrative aligns with its musical expression.`,
};
