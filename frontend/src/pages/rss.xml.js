import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { useSanityClient } from 'astro-sanity';
import { getAllPostForRss  } from '../sanity';

export async function get(context) {
  const posts = await useSanityClient().fetch(getAllPostForRss);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const { slug, ...rest } = post;
			return {
				...rest,
				link: `/blog/${post.slug}/`,
			}
		}),
	});
}
