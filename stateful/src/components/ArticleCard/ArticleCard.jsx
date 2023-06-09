import { useState } from 'react';
import style from './style.module.css'

export function ArticleCard(props) {
  const {
    title,
    description,
    author,
    // body,
    favorited,
    favoritesCount,
    // slug,
    tagList,
    createdAt,
    // updatedAt,
  } = props

  const [isFavorited, setFavorited] = useState(favorited)

  const createdAtFormatted = new Date(createdAt).toUTCString();

  function toggleFavorited() {
    setFavorited(oldValue => !oldValue)
  }

  return (
    <article className={style.article}>
      <header className={style.header}>
        <div className={style.info}>
          <img className={style.avatar} src={author.image} alt={`Avatar of ${author.username}`} />
          <div className={style.intoText}>
            <h2 className={style.alias}>
              {author.username}
            </h2>
            <h3 className={style.createdAt}>
              {createdAtFormatted}
            </h3>
          </div>
        </div>

        <div>
          <button
            className={style.favorite}
            onClick={toggleFavorited}
          >
            <span
              className={
                isFavorited ? style.favorited : ""
              }
            >
              ❤️
            </span>
            {favoritesCount}
          </button>
        </div>
      </header>

      <div className={style.main}>
        <h1>{title.slice(0, 50) + (title.length > 50 && "...")}</h1>
        <p>{description.slice(0, 130) + (description.length > 100 && "...")}</p>
      </div>

      <footer className={style.footer}>
        <a href="">Read more..</a>

        <ul className={style.tagList}>
          {
            tagList.map(
              (tag) => {
                return (
                  <li key={tag}>
                    <p>{tag}</p>
                  </li>
                )
              }
            )
          }
        </ul>
      </footer>
    </article>
  )
}