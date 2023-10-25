import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { sanityClient } from "sanity:client";
import { getAllPostForRss } from '.';

export async function GET(context) {
  const posts = await sanityClient.fetch(getAllPostForRss);
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
