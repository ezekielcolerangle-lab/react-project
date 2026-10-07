import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer id="footer">
			<p>© 2026 Ezekiel Colerangle</p>
			<Link to="/">Back to home <span aria-hidden="true">↑</span></Link>
		</footer>
	)
}

export default Footer
