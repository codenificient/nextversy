import headerStyples from "../styles/Header.module.css";

function Header() {
	return (
		<div>
			<h1 className={headerStyples.title}>
				<span>WebDev</span> Newz
			</h1>
			<p className={headerStyples.description}>
				Stay abreast of the latest web dev news
			</p>
		</div>
	);
}

export default Header;
