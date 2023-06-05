import { useEffect, useState } from "react";

const BASE_URL = "https://api.realworld.io/api"
const API_ARTICLE_ENDPOINT = "/articles"

export function useArticles() {
  const [currentArticles, setArticles] = useState([])

  useEffect(
    () => {
      fetch(BASE_URL + API_ARTICLE_ENDPOINT + `?offset=0&limit=20`)
        .then(response => response.json())
        .then(data => {
          setArticles(oldData => data.articles)
        })
    },
    []
  )

  return {
    currentArticles,
    previousSet: () => {},
    nextSet: () => {},
  }
}