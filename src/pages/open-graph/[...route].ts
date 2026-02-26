import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import path from 'node:path';

const posts = await getCollection('projects');
const pages = Object.fromEntries(
  posts.map((post) => {
    // 1. Get the image object
    const thumb = post.data.thumbnail?.src;
    let imagePath = '';

    if (thumb) {
      /**
       * In Astro 5, 'thumb' contains 'fsPath' if it's a local asset.
       * If fsPath isn't available, we manually resolve the path.
       */
      // @ts-ignore - fsPath is often present but not always in the type definition
      const rawPath = thumb.fsPath || thumb.src.split('?')[0];
      
      // 2. Clean up Windows/Vite prefixes
      let cleanPath = rawPath.replace('/@fs/', '');
      if (cleanPath.startsWith('/') && cleanPath[2] === ':') {
        cleanPath = cleanPath.slice(1);
      }
      
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