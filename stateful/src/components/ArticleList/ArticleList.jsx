import style from './style.module.css'

import { ArticleCard } from '../ArticleCard/ArticleCard'

import { getArticleSet } from "../../data/crudOperations"
import { useState } from 'react'

export function ArticleList() {
  const [currentPage, setCurrentPage] = useState(0)

  const { articles, numberOfArticles } = getArticleSet(currentPage, currentPage + 4)

  function previousPage() {
    if (currentPage <= 0) {
      setCurrentPage(0)
      return
    }
    setCurrentPage(oldValue => oldValue - 4)
  }

  function nextPage() {
    if (currentPage >= numberOfArticles - 4) {
      setCurrentPage(numberOfArticles - 4)
      return
    }
    setCurrentPage(oldValue => oldValue + 4)
  }

  return (
    <div>
      <ul className={style.articleList}>
        {
          articles.map(
            (article) => {
              return (
                <li key={article.slug}>
                  <ArticleCard {...article} />
                </li>
              )
            }
          )
        }
      </ul>

      <nav className={style.pagination}>
        <button onClick={previousPage} className={style.arrow}>&#60;</button>
        <ul className={style.pages}>
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
        </ul>
        <button onClick={nextPage} className={style.arrow}>&#62;</button>
      </nav>
    </div>
  )
}