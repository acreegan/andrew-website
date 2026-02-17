import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Andrew Creegan",
  EMAIL: "andrew.s.creegan@gmail.com",
  NUM_PROJECTS_ON_HOMEPAGE: 6,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Andrew Creegan's Website",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of projects by Andrew",
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
