import { groq } from 'astro-sanity';

export const getAllPostForHome = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"category": category->{
		title,
		"slug": slug.current
	},
}`;

export const getAllPostSlug = groq`*[_type == 'post']{
  "slug": slug.current
}`;

export const getAllPostForPage = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	intro,
	publishedAt,
	"author": author->{
		name,
		image,
	},
	body,
	"category": category->{
		title,
		"slug": slug.current,
	},
	"tags": tags[]->{
		title,
		"slug": slug.current,
	},
}`

// // title,
// 	"slug": slug.current,
// 	mainImage,
// 	publishedAt,
// 	"author": author->{
// 		name,
// 		image,
// 	},
// 	categories{
// 		title,
// 		"slug": slug.current,
// 	},
// 	tags{
// 		title,
// 		"slug": slug.current,
// 	},