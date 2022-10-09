import Link from 'next/link';
const Footer = () => {
	return (
		<nav>
			<Link href='/'>home</Link>
			<Link href='/about'>about</Link>
			<Link href='/contact'>contact</Link>
		</nav>
	);
};

export default Footer;
