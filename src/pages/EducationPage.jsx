import { Link } from 'react-router-dom'

const learningAreas = [
  {
    number: '01',
    title: 'Electrical engineering',
    description: 'Developing a foundation in electrical systems and engineering problem solving.',
  },
  {
    number: '02',
    title: 'Electronics',
    description: 'Exploring components, circuits, and the practical side of hardware.',
  },
  {
    number: '03',
    title: 'Programming',
    description: 'Building programming skills alongside my engineering studies.',
  },
]

function EducationPage() {
  return (
    <main>
      <section className="content-section skills-section" aria-labelledby="education-title">
        <div className="section-heading">
          <p className="section-kicker">04 / Education</p>
          <h2 id="education-title">Learning with a systems perspective.</h2>
          <p className="section-summary">
            I’m studying Electrical and Electronic Engineering, developing a
            foundation that connects theory, hardware, and programming.
          </p>
          <Link className="text-link" to="/skills">See my areas of focus <span aria-hidden="true">→</span></Link>
        </div>
        <div className="skills-list">
          {learningAreas.map((area) => (
            <article className="skill-row" key={area.number}>
              <span className="skill-number">{area.number}</span>
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
              <span className="skill-symbol" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default EducationPage