import './style.css'

export function CustomSection(props) {
  const { children, id } = props;

  return (
    <section id={id} className="section">
      {children}
    </section>
  )
}