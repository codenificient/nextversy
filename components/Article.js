import React from "react"
import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

function Article({ article }) {
	const colors = ["burgundy", "beige", "purple", "lime"]
	return (
		<Link href='/article/[id]' as={`/article/${article.id}`}>
			<a className={`${articleStyles.card} ${colors[article.id % 4]}`}>
				<h3>{article.title} &rarr;</h3>
				<p>{article.body}</p>
			</a>
		</Link>
	)
}

export default Article
