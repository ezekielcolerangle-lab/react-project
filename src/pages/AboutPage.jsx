import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main>
      <section className="content-section skills-section" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-kicker">01 / About me</p>
          <h2 id="about-title">An engineer in progress.</h2>
          <p className="section-summary">
            I’m Ezekiel, an Electrical and Electronic Engineering student interested
            in technology, electronics, and programming.
          </p>
          <p className="section-summary">
            I’m building my foundations by learning across hardware and software,
            and documenting that process through projects and this portfolio.
          </p>
          <Link className="text-link" to="/skills">Explore my areas of focus <span aria-hidden="true">→</span></Link>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <img className="hero-portrait" src="/picture.jpg" alt="Portrait of Ezekiel Colerangle" />
          </div>
          <div className="portrait-caption"><span>EC</span><span>Engineering<br />&amp; exploration</span></div>
          <div className="portrait-index" aria-hidden="true">ABOUT / 01</div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage