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
    name: string
  },
  body: {
    _type: 'localeBlockContent',
    fr: Array<any>
  },
  category: { slug: string, title:  string},
  intro: string,
  mainImage: Image,
  publishedAt: string,
  slug: string,
  tags: { slug: string, title: string }[],
  title: string
}