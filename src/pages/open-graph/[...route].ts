import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const posts = await getCollection('projects');

const pages = Object.fromEntries(
  posts.map((post) => {
    const imagePath = post.data.thumbnail ? post.data.thumbnail.src.src.split("?")[0].split("@fs/")[1] : undefined
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