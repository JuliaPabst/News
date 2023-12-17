import React, { useState, useEffect } from "react";

export default function Overview({ selectedTopic, selectedQuestion }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us${selectedTopic}${selectedQuestion}&apiKey=5f7b0ea563be41f488507f98809e07bd`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, [selectedTopic, selectedQuestion]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (
    articles.filter(
      (article) =>
        article.urlToImage && article.author && article.title.length < 100
    ).length == 0
  ) {
    return (
      <div>
        <p>No articles found!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {articles
          .filter(
            (article) =>
              article.urlToImage && article.author && article.title.length < 100
          )
          .slice(0, 9)
          .map((article, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-3 no-padding-no-margin"
            >
              <div className="card">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-text">
                    {article.author} from {article.source.name}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to article
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      <p>A website by Julia Pabst</p>
    </div>
  );
}
