import React from "react";
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link 
                key={key} 
                to={`/article/${article.name}`}
                className="article-list-item"
            >
                <h3>{article.title}</h3>

                <p>{article.content[0].substring(0, 150)}...</p>
            </Link> 
        ))}
    </>
);

export default ArticlesList;