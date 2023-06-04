import style from './style.module.css'

export function CustomSection(props) {
  const { children, id } = props;

  return (
    <section id={id} className={style.section}>
      {children}
    </section>
  )
}