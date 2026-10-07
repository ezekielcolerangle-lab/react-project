import { Link } from 'react-router-dom'

function ReactProject() {
  return (
    <section className="content-section projects-section" aria-labelledby="project-title">
      <div className="projects-heading">
        <div className="section-heading">
          <p className="section-kicker">Project / 001</p>
          <h2 id="project-title">React portfolio.</h2>
        </div>
        <p className="section-summary">
          A personal portfolio introducing my engineering journey, areas of focus,
          and the work I am building along the way.
        </p>
      </div>

      <div className="project-feature">
        <div className="project-art" aria-hidden="true">
          <div className="project-window">
            <span />
            <span />
            <span />
            <div className="project-code">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="project-art-label">BUILD / 001</span>
        </div>
        <div className="project-details">
          <div className="project-meta">
            <span>In progress</span>
            <span>React · Vite</span>
          </div>
          <h3>About the project</h3>
          <p>
            This site is designed to help employers, engineering companies,
            recruiters, and collaborators quickly understand who I am and what
            I am learning.
          </p>
          <p>
            It brings together my introduction, engineering and programming
            interests, current project, and a direct path to my GitHub profile.
          </p>
          <a
            className="project-link"
            href="https://github.com/ezekielcolerangle-lab"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="projects-footnote">
        <Link className="text-link" to="/">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
        <span>React · Vite · CSS</span>
      </div>
    </section>
  )
}

export default ReactProject