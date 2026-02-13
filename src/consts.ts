import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Andrew Creegan",
  EMAIL: "andrew.s.creegan@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Andrew Creegan's Website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles by Andrew",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/andrewcreegan/",
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/andrew-creegan",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/acreegan"
  },

];
