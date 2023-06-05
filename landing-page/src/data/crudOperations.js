import { articlesResponse } from "./articles";

export function getAllArticles() {
  return articlesResponse.articles
}

export function getArticle(slug) {
  return articlesResponse.articles.find(article => article.slug === slug)
}