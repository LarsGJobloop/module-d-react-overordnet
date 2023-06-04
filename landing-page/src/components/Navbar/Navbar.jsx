import style from './style.module.css'

export function Navbar() {
  return (
    <header className={style.navbar}>
      <div>Logo</div>

      <nav>
        <ul className={style.navigationMain}>
          <li><a href="">Top Section</a></li>
          <li><a href="">Middle Section</a></li>
          <li><a href="">Bottom Section</a></li>
        </ul>
      </nav>
    </header>
  )
}