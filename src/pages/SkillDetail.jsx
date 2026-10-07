import { Link, useParams } from 'react-router-dom'

const skillDetails = {
  'electrical-engineering': {
    number: '01',
    title: 'Electrical engineering',
    summary:
      'I am developing a foundation in the principles behind electrical systems, and how they can be understood, designed, and applied.',
    topics: [
      {
        title: 'Circuit fundamentals',
        description:
          'Understanding voltage, current, resistance, and how circuit components work together.',
      },
      {
        title: 'Systems thinking',
        description:
          'Learning to analyze how electrical components and subsystems interact as a whole.',
      },
      {
        title: 'Applied problem solving',
        description:
          'Connecting mathematical ideas to practical engineering questions and constraints.',
      },
    ],
  },
  electronics: {
    number: '02',
    title: 'Electronics',
    summary:
      'I am exploring the components and circuits that turn electrical principles into practical hardware.',
    topics: [
      {
        title: 'Electronic components',
        description:
          'Learning how common components behave and contribute to a circuit.',
      },
      {
        title: 'Circuit design',
        description:
          'Building an understanding of how circuit choices affect a device’s behavior.',
      },
      {
        title: 'Hardware and software',
        description:
          'Exploring the connection between electronic systems and the code that can interact with them.',
      },
    ],
  },
  programming: {
    number: '03',
    title: 'Programming',
    summary:
      'I use programming to break down problems, explore solutions, and make useful ideas work.',
    topics: [
      {
        title: 'Problem solving',
        description:
          'Turning a larger task into smaller steps that can be reasoned about and tested.',
      },
      {
        title: 'Building with code',
        description:
          'Practicing how to move from an idea to a working program through iteration.',
      },
      {
        title: 'Engineering applications',
        description:
          'Growing an interest in how software can support analysis, automation, and technical projects.',
      },
    ],
  },
  'web-development': {
    number: '04',
    title: 'Web development',
    summary:
      'I am learning to create clear, responsive websites with React and the modern web platform.',
    topics: [
      {
        title: 'React interfaces',
        description:
          'Composing reusable page sections and interactive experiences from components.',
      },
      {
        title: 'Responsive design',
        description:
          'Making layouts adapt to different screen sizes while keeping content readable and usable.',
      },
      {
        title: 'Frontend foundations',
        description:
          'Working with JavaScript, HTML, and CSS to build and refine the user experience.',
      },
    ],
  },
}

function SkillDetail() {
  const { skillId } = useParams()
  const skill = skillDetails[skillId]

  if (!skill) {
    return (
      <section className="content-section skills-section" aria-labelledby="skill-title">
        <div className="section-heading">
          <p className="section-kicker">Skill / Not found</p>
          <h2 id="skill-title">This skill page isn’t available.</h2>
        </div>
        <Link className="text-link" to="/">Back to homepage</Link>
      </section>
    )
  }

  return (
    <section className="content-section skills-section" aria-labelledby="skill-title">
      <div className="section-heading">
        <p className="section-kicker">{skill.number} / Skill focus</p>
        <h2 id="skill-title">{skill.title}</h2>
        <p className="section-summary">{skill.summary}</p>
      </div>
      <div className="skills-list">
        {skill.topics.map((topic, index) => (
          <article className="skill-row" key={topic.title}>
            <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
            <span className="skill-symbol" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
      <div className="projects-footnote">
        <Link className="text-link" to="/">
          <span aria-hidden="true">←</span> Back to homepage
        </Link>
        <span>{skill.number} — 04</span>
      </div>
    </section>
  )
}

export default SkillDetail