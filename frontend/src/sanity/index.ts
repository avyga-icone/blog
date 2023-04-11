export * from "./portableText";
export * from "./queries";
export * from "./urlForImage"

export type Image = {
  _type: 'image',
  asset: {
    _ref: string,
    _type: 'reference'
  }
};

export type Post = {
  author: {
    image: Image,
    name: string,
    slug: string,
    bio: string,
  },
  body: {
    _type: 'localeBlockContent',
    fr: Array<any>
  },
  bio: string;
  categories: { slug: string, title:  string}[],
  intro: string,
  mainImage: Image,
  publishedAt: string,
  slug: string,
  tags: { slug: string, title: string }[],
  title: string
}

export type PostAndRecommend = {
  author: {
    image: Image,
    name: string,
    slug: string,
    bio: string,
  },
  body: {
    _type: 'localeBlockContent',
    fr: Array<any>
  },
  categories: { slug: string, title:  string}[],
  intro: string,
  mainImage: Image,
  publishedAt: string,
  slug: string,
  tags: { slug: string, title: string }[],
  title: string
  recommended: Post[]
}