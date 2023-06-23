import blockContent from './blockContent'
import localeblockContent from './locale/localeBlockContent'
import category from './category'
import tag from './tag'
import post from './post'
import author from './author'
import localeString from './locale/localeString'
import localeText from './locale/localeText'
import page from './page'
import companyPage from './companyPage'

export const schemaTypes = [
  post, 
  author, 
  category, 
  tag,
  page,
  companyPage,
  blockContent,
  localeString,
  localeText,
  localeblockContent
]
