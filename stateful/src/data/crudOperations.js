import { articlesResponse } from "./articles";

export function getArticleSet(start = 0, end = 4) {
  return {
    articles: articlesResponse.articles.slice(start, end),
    numberOfArticles: articlesResponse.articlesCount
  }
}

export function getArticle(slug) {
  return articlesResponse.articles.find(article => article.slug === slug)
}