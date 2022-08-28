import React from 'react';
import articles from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articles.find(article => article.name === name);

    if (!article) {
        return (
            <h1>Article does not exist!</h1>
        );
    }

    return (
        <>
            <h1>{article.title}</h1>

            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    );
}

export default ArticlePage;