import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import path from 'node:path';

const posts = await getCollection('projects');
const pages = Object.fromEntries(posts.map(({ id, data }) => [id, data]));

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',

  pages: pages,

  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/favicon_light.svg',
    },
    bgGradient: [[10, 10, 10], [30, 30, 30]], 
    font: {
      title: { 
        color: [255, 255, 255],
        size: 60, 
        weight: 'Bold' 
      },
      description: { 
        color: [200, 200, 200],
        size: 30 
      },
    },
    padding: 80,
  }),
});