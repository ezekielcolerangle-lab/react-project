import { Link } from 'react-router-dom'

function Projects() {
  return (
    <section className="content-section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-heading">
        <div className="section-heading">
          <p className="section-kicker">03 / Selected work</p>
          <h2 id="projects-title">Learning looks like<br />making things.</h2>
        </div>
        <p className="section-summary">A first look at what I’m building as I grow across engineering and software.</p>
      </div>
      <Link className="project-feature" to="/react-project">
        <div className="project-art" aria-hidden="true">
          <div className="project-window"><span /><span /><span /><div className="project-code"><i /><i /><i /><i /><i /></div></div>
          <span className="project-art-label">BUILD / 001</span>
        </div>
        <div className="project-details">
          <div className="project-meta"><span>In progress</span><span>React · Vite</span></div>
          <h3>Personal portfolio</h3>
          <p>A home for my engineering journey, current areas of focus, and the projects still taking shape.</p>
          <span className="project-link">View project <span aria-hidden="true">↗</span></span>
        </div>
      </Link>
      <div className="projects-footnote"><span>More projects will appear here as they’re ready to share.</span><span>01 — 01</span></div>
    </section>
  )
}

export default Projects