import articleStyles from "../styles/Article.module.css"

import React from "react"
import Article from "./Article"

function ArticleList({ articles }) {
	return (
		<div className={articleStyles.grid}>
			{articles.map((article) => (
				<Article key={article.id} article={article} />
			))}
		</div>
	)
}

export default ArticleList
