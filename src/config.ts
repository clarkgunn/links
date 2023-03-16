// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Links Podcast';
export const SITE_DESCRIPTION =
  'LINKS is a podcast exploring the social impact of web performance, accessibility, user experience, and privacy. Engaging discussions and expert insights in bridging the digital divide and building a more equitable web.';
export const TWITTER_HANDLE = '@clark_gunn';
export const MY_NAME = 'Clark Gunn';

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
