import { Link } from 'react-router-dom'

function Skills() {
  const skills = [
    {
      id: 'electrical-engineering',
      number: '01',
      title: 'Electrical engineering',
      summary: 'Building a foundation in the systems that power the world around us.',
      symbol: '⌁',
    },
    {
      id: 'electronics',
      number: '02',
      title: 'Electronics',
      summary: 'Exploring components, circuits, and the practical side of hardware.',
      symbol: '⌘',
    },
    {
      id: 'programming',
      number: '03',
      title: 'Programming',
      summary: 'Using code to reason through problems and turn ideas into working tools.',
      symbol: '{ }',
    },
    {
      id: 'web-development',
      number: '04',
      title: 'Web development',
      summary: 'Creating responsive experiences with React and modern web tools.',
      symbol: '↗',
    },
  ]

  return (
    <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <p className="section-kicker">02 / Areas of focus</p>
        <h2 id="skills-title">What I’m learning<br />to make possible.</h2>
      </div>
      <div className="skills-list">
        {skills.map((skill) => (
          <Link className="skill-row" key={skill.id} to={`/skills/${skill.id}`}>
            <span className="skill-number">{skill.number}</span>
            <div><h3>{skill.title}</h3><p>{skill.summary}</p></div>
            <span className="skill-symbol" aria-hidden="true">{skill.symbol}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Skills