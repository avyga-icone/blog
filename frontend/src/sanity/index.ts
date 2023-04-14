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

export type Category = {
  slug: string, 
  title: {
    _type: 'localeString',
    en: string,
    fr: string
  }
}

export type Tag = {
  slug: string, 
  title: {
    _type: 'localeString',
    en: string,
    fr: string
  }
}


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
  bio: {
    _type: 'localeText',
    en: string,
    fr: string
  };
  categories: Category[],
  intro: string,
  mainImage: Image,
  publishedAt: string,
  slug: string,
  tags: Tag[],
  title:  {
    _type: 'localeString',
    en: string,
    fr: string
  }
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
  categories: Category[],
  intro: string,
  mainImage: Image,
  publishedAt: string,
  slug: string,
  tags: Tag[],
  title: {
    _type: 'localeString',
    en: string,
    fr: string
  }
  recommended: Post[]
}