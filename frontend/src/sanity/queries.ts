import { groq } from 'astro-sanity';

export const getAllPostForHome = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	categories{
		title,
		"slug": slug.current
	},
}`;

export const getAllPostSlug = groq`[_type == 'post']{
  "slug": slug.current
}`;

export const getPost = groq`[_type == 'post' && slug.current == $slug]{
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"author": {
		name,
		image
	},
	categories{
		title,
		"slug": slug.current
	},
	tags{
		title,
		"slug": slug.current
	},

}`