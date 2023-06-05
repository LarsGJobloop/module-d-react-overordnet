import { useEffect, useState } from "react";

const BASE_URL = "https://api.realworld.io/api"
const API_ARTICLE_ENDPOINT = "/articles"

export function useArticles() {
  const [articles, setArticles] = useState([])
  const [articlesCount, setArticlesCount] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [furthestStride, setFurthestStride] = useState(0)

  useEffect(
    () => {
      const offset = (10 * furthestStride)
      console.log(`Current amount of articles: ${articles.length}`)
      console.log(`Fetching article set: ${offset} - ${10 + offset}`)

      fetch(BASE_URL + API_ARTICLE_ENDPOINT + `?offset=${offset}&limit=${10}`)
        .then(response => response.json())
        .then(data => {
          setArticles(oldData => [...oldData, ...data.articles])
          setArticlesCount(data.articlesCount)
        })
    },
    [furthestStride]
  )

  // Compute current set of articles
  let currentArticles = null
  if (articles) {
    currentArticles = articles.slice(currentIndex, currentIndex + 10)
  }

  function previousSet() {
    // Do nothing until we have articles
    if (!articles) return

    // Prevent index underflow
    setCurrentIndex(oldIndex => {
      if (oldIndex <= 10) {
        return 0
      } else {
        return oldIndex - 10
      }
    })
  }

  function nextSet() {
    // Do nothing until we have articles
    if (!articles) return

    // Prevent index overflow
    setCurrentIndex(oldIndex => {
      if (oldIndex >= articlesCount - 10) {
        return articlesCount - 10
      } else {
        return oldIndex + 10
      }
    })

    // Make new fetch requests as the user browses
    if (currentIndex >= (furthestStride * 10) - 10) {
      setFurthestStride(oldMax => oldMax + 1)
    }
  }

  return {
    currentArticles,
    currentIndex,
    articlesCount,
    previousSet,
    nextSet,
  }
}