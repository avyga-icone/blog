import { groq } from 'astro-sanity';

export const getCateogriesPaginated = groq`*[_type == "category"]{
	title,
	"slug": slug.current
}[0...5]`

export const getAllPostForHome = groq`*[_type == "post" && dateTime(publishedAt) <= dateTime(now())] | order(publishedAt desc){
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"categories": categories[]->{
		title,
		"slug": slug.current
	},
}`;

export const getAllPostForRss = groq`*[
	_type == "post" 
	&& dateTime(publishedAt) <= dateTime(now())
	&& title.fr != null
] | order(publishedAt desc){
	"title": title.fr,
	"pubDate": publishedAt,
	"description": intro.fr,
	"slug": slug.current
}`;

export const getAllPostForHomePaginated = groq`*[_type == "post" && dateTime(publishedAt) <= dateTime(now())] | order(publishedAt desc) {
	title,
	"slug": slug.current,
	mainImage,
	publishedAt,
	"categories": categories[]->{
		title,
		"slug": slug.current
	},
}[0...7]`;


export const getAllPostAndRecommended = groq`*[_type == "post" && dateTime(publishedAt) <= dateTime(now())]{
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
		&& dateTime(publishedAt) <= dateTime(now())
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
