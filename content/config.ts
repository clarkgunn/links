import { z, defineCollection } from 'astro:content';

const showRecommended = {
  author: z.string().optional(),
  link: z.url().optional(),
  owner: z.object({
    name: z.string(),
    email: z.string().email(),
  }).optional()
}

const showSituational = {
  itunesTitle: z.string().optional(),
  itunesType: z.enum(['episodic', 'serial']).optional(),
  itunesCopyright: z.string().optional(),
  itunesNewFeedUrl: z.url().optional(),
  itunesBlock: z.boolean().default(false).optional(),
  itunesComplete: z.boolean().default(false).optional(),
}

const show = defineCollection({
  title: z.string(),
  description: z.string(),
  image: z.url(),
  language: z.enum(['en-us']).default('en-us'),
  category: z.object({
    'Arts': z.enum(['None', 'Books', 'Design','Fashion &amp; Beauty', 'Food', 'Performing Arts', 'Visual Arts']).default('None'),
    'Business': z.enum(['None', 'Careers', 'Entrepreneurship', 'Investing', 'Management &amp; Marketing', 'Shopping']).default('None'),
    'Comedy': z.enum(['None', 'Comedy Interviews', 'Improv', 'Stand-up']).default('None'),
    'Education': z.enum(['None', 'Courses', 'How To', 'Language Learning', 'Self-Improvement']).default('None'),
    'Fiction': z.enum(['None', 'Comedy Fiction', 'Drama', 'Science Fiction']).default('None'),
    'Government': z.enum(['None']).default('None'),
    'History': z.enum(['None']).default('None'),
    'Health &amp; Fitness': z.enum(['None', 'Alternative Health', 'Fitness', 'Medicine', 'Mental Health', 'Nutrition', 'Sexuality']).default('None'),
    'Kids &amp; Family': z.enum(['None', 'Education for Kids', 'Parenting', 'Pets &amp; Animals', 'Stories for Kids']).default('None'),
    'Leisure': z.enum(['None', 'Animation &amp; Manga', 'Automotive', 'Aviation', 'Crafts', 'Games', 'Hobbies', 'Home &amp; Garden', 'Video Games']).default('None'),
    'Music': z.enum(['None', 'Music Commentary', 'Music History', 'Music Interviews']).default('None'),
    'News': z.enum(['None', 'Business News', 'Daily News', 'Entertainment News', 'News Commentary', 'Politics', 'Sports News', 'Tech News']).default('None'),
    'Religion &amp; Spirituality': z.enum(['None', 'Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Judaism', 'Religion', 'Spirituality']).default('None'),
    'Science': z.enum(['None', 'Astronomy', 'Chemistry', 'Earth Sciences', 'Life Sciences', 'Mathematics', 'Natural Sciences', 'Nature', 'Physics', 'Social Sciences']).default('None'),
    'Society &amp; Culture': z.enum(['None', 'Documentary', 'Personal Journals', 'Philosophy', 'Places &amp; Travel']).default('None'),
    'Sports': z.enum(['None', 'Baseball', 'Basketball', 'Cricket', 'Fantasy Sports', 'Football', 'Golf', 'Hockey', 'Rugby', 'Running', 'Soccer', 'Swimming', 'Tennis', 'Volleyball', 'Wilderness', 'Wrestling']).default('None'),
    'Technology': z.enum(['None']).default('None'),
    'True Crime': z.enum(['None']).default('None'),
    'TV &amp; Film': z.enum(['None', 'After Shows', 'Film History', 'Film Interviews', 'Film Reviews', 'TV Reviews']).default('None'),
  }),
  'explicit': z.boolean().default(false),
  ...recommended
  ...situational
});

episodeRecommended = {
  guid: z.guid(),
  pubDate: z.date(),
  description: z.string(),
  duration: z.number(),
  link: z.url(),
  image: z.url(),
  explicit: z.boolean().default(false),
}

const situational = {
  itunesTitle: z.string().optional(),
  itunesEpisode: z.number().optional(),
  itunesSeason: z.number().optional(),
  itunesEpisodeType: z.enum(['full', 'trailer', 'bonus']).optional(),
  itunesBlock: z.boolean().default(false).optional(),
};

const episode = defineCollection({
  title: z.string(),
  enclosure: z.object({
    url: z.string().url(),
    length: z.number(),
    type: z.enum([
      'audio/x-m4a',
      'audio/mpeg',
      'video/quicktime',
      'video/mp4',
      'video/x-m4v',
      'application/pdf',
    ]),
  }),
  ...episodeRecommended
  ...episodeSituational
});



export const collections = {
  show
  episode,
};
