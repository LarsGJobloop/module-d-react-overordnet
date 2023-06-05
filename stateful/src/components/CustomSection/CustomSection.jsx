import style from './style.module.css'

export function CustomSection(props) {
  const {
    children,
    id,
    coverScreen = false,
    centerContent = true,
  } = props;

  return (
    <section id={id} className={[
      style.section,
      coverScreen ? style.cover : "",
      centerContent ? style.center : "",
    ].join(" ")}>
      {children}
    </section>
  )
}