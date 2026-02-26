import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection('projects');

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(collectionEntries.map(({ id, data }) => [id, data]));

export const { getStaticPaths, GET } = await OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: 'route',

  pages: pages,

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/favicon_light.svg',
    },
    bgImage: {
      path: `${page.thumbnail?.src.src.split("?")[0].split("@fs/")[1]}`,
      fit: 'cover'
    },
// RGB only: [Red, Green, Blue]
    // To make it look "transparent," use very dark grays/blacks
    bgGradient: [[10, 10, 10], [30, 30, 30]], 
    
    font: {
      title: { 
        color: [255, 255, 255], // White
        size: 60, 
        weight: 'Bold' 
      },
      description: { 
        color: [200, 200, 200], // Light Gray
        size: 30 
      },
    },
    // This helps the text breathe if the background image is busy
    padding: 80,
  }),
});