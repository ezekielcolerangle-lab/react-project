function Hero() {
	return (
		<section className="hero-section" id="home" aria-labelledby="hero-title">
			<div className="hero-copy">
				<p className="eyebrow"><span className="status-dot" /> Electrical &amp; Electronic Engineering Student</p>
				<h1 id="hero-title">Curious by nature.<br /><span>Engineer in progress.</span></h1>
				<p className="hero-intro">
					I’m Ezekiel, an engineering student exploring the space between electronics,
					programming, and the ideas that bring them together.
				</p>
				<div className="hero-actions">
					<a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
					<a className="text-link" href="https://github.com/ezekielcolerangle-lab" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a>
				</div>
				<div className="hero-note"><span>01</span><span>Learning through building</span></div>
			</div>
			<div className="hero-portrait-wrap">
				<div className="portrait-frame">
					<img src="/picture.jpg" className="hero-portrait" alt="Portrait of Ezekiel Colerangle" />
				</div>
				<div className="portrait-caption"><span>EE</span><span>Engineering<br />&amp; exploration</span></div>
				<div className="portrait-index" aria-hidden="true">EC / 26</div>
			</div>
		</section>
	)
}

export default Hero
