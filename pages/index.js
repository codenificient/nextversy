import Image from "next/image"
import ArticleList from "../components/ArticleList"
import { server } from "../config"
import styles from "../styles/Home.module.css"

export default function Home({ articles }) {
	// console.log(articles)
	return (
		<div className={styles.wrapper}>
			<h1>Welcome to Next</h1>
			<div className={styles.container}>
				<ArticleList articles={articles} />
			</div>
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {
			articles,
		},
	}
}

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=6`
// 	)
// 	const articles = await res.json()

// 	return {
// 		props: {
// 			articles,
// 		},
// 	}
// }
