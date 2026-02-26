import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '../../..');

const posts = await getCollection('projects');

const pages = Object.fromEntries(
posts.map((post) => {
  const thumb = post.data.thumbnail?.src;
  let imagePath = '';

  if (thumb) {
    // 1. Remove the Astro-specific /@fs/ prefix
    // 2. Remove any leading slash that might remain (e.g., /C:/ becomes C:/)
    let cleanPath = thumb.src
      .replace('/@fs/', '')      // Remove Astro prefix
      .split('?')[0];            // Remove query params

    if (cleanPath.startsWith('/') && cleanPath[2] === ':') {
      cleanPath = cleanPath.slice(1); // Turn /C:/ into C:/
    }

    // 3. Normalize the path for Windows (turns / into \)
    imagePath = path.normalize(cleanPath);
  }

  return [
    post.id,
    {
      title: post.data.title,
      description: post.data.description,
      thumbnailPath: imagePath,
    }
  ];
})
);

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',

  pages: pages,

  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './public/favicon_light.svg',
    },
    bgImage: page.thumbnailPath? {
      path: page.thumbnailPath,
      fit: 'cover'
    }:undefined ,
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