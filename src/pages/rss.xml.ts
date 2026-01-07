import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortByDateDesc, filterDrafts } from '@utils/dates';
import type { APIContext } from 'astro';

const contact = 'community@itowns.org';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('blog');
  const publishedPosts = sortByDateDesc(filterDrafts(allPosts));

  return rss({
    title: 'iTowns Blog',
    description:
      'Framework updates, governance communication, and technical insights from the iTowns community.',
    site: context.site || 'https://itowns.org',
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.summary,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author || 'iTowns Contributors',
      customData: `<audience>${post.data.audience}</audience>`,
    })),
    customData: `
      <language>en-us</language>
      <copyright>© ${new Date().getFullYear()} iTowns Contributors. Apache 2.0 License.</copyright>
      <managingEditor>${contact} (iTowns Community)</managingEditor>
      <webMaster>${contact} (iTowns Community)</webMaster>
      <ttl>60</ttl>
    `,
  });
}

