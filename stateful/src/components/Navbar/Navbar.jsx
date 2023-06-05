import style from './style.module.css'

export function Navbar() {
  return (
    <header className={style.navbar}>
      <a href="/">
        Logo
      </a>

      <nav>
        <ul className={style.navigationMain}>
          <li><a href="#top">Top Section</a></li>
          <li><a href="#mid">Middle Section</a></li>
          <li><a href="#bot">Bottom Section</a></li>
        </ul>
      </nav>
    </header>
  )
}