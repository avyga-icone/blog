import { groq } from 'astro-sanity';

export const getAllPostForHome = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"categories": categories[]->{
		title,
		"slug": slug.current
	},
}`;

export const getAllPostForHomePaginated = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"categories": categories[]->{
		title,
		"slug": slug.current
	},
}[0...6]`;


export const getAllPostAndRecommended = groq`*[_type == "post"]{
	title,
	"slug": slug.current,
	mainImage,
	intro,
	publishedAt,
	"author": author->{
		name,
		image,
		slug,
		bio
	},
	body,
	"categories": categories[]->{
		title,
		"slug": slug.current,
	},
	"tags": tags[]->{
		title,
		"slug": slug.current,
	},
	"recommended": *[
		_type == "post" 
		&& categories[0]->{'slug': slug.current}.slug == ^.categories[0]->{ 'slug': slug.current }.slug
		&& slug.current != ^.slug.current
	]{
		title,
		"slug": slug.current,
		mainImage,
		publishedAt,
		"categories": categories[]->{
			title,
			"slug": slug.current
		}
	}[0...2]
}`
