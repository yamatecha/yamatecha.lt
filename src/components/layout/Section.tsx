interface SectionProps {
  id: string
  title: string
  description: string
}

const Section = ({ id, title, description }: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Section
