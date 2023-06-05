import style from './style.module.css'

import { ArticleCard } from '../ArticleCard/ArticleCard'
import { useArticles } from '../../hooks/useArticles'

export function ArticleList() {
  const { currentArticles, nextSet, previousSet, currentIndex, articlesCount } = useArticles()

  return (
    <div>
      <h1>Viewing: {currentIndex} / {articlesCount}</h1>
      <ul className={style.articleList}>
        {
          currentArticles &&
          currentArticles.map(
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
        <button onClick={previousSet} className={style.arrow}>&#60;</button>
        <ul className={style.pages}>
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
        </ul>
        <button onClick={nextSet} className={style.arrow}>&#62;</button>
      </nav>
    </div>
  )
}