import './style.css'

export function ArticleCard(props) {
  const {
    title,
    description,
    author,
    body,
    favorited,
    favoritesCount,
    slug,
    tagList,
    createdAt,
    updatedAt,
  } = props

  const createdAtFormatted = new Date(createdAt).toUTCString();

  return (
    <article className="article">
      <header className="articleHeader">
        <div className="info">
          <img className="avatar" src={author.image} alt={`Avatar of ${author.username}`} />
          <div className="intoText">
            <h2 className="alias">
              {author.username}
            </h2>
            <h3 className="createdAt">
              {createdAtFormatted}
            </h3>
          </div>
        </div>

        <div>
          <button
            className="favorite"
          >
            <span
              className={
                favorited ? "favorited" : ""
              }
            >
              ❤️
            </span>
            {favoritesCount}
          </button>
        </div>
      </header>

      <div className="articleMain">
        <h1>{title}</h1>
        <p>{description.slice(0, 130) + (body.length > 100 && "...")}</p>
      </div>

      <footer className="articleFooter">
        <a href="">Read more..</a>

        <ul className="tagList">
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