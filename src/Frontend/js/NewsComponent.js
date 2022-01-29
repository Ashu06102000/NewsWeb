import React from "react";
import "../CSS/NewsComponent.css";

function NewsComponent({ title, description, urlToImage, publishedAt, url }) {
  return (
    <div>
      <div className="main">
        <div className="content-wrapper">
          <div className="news-card">
            <a href="/" className="news-card__card-link"></a>
            <img src={urlToImage} alt="" className="news-card__image" />
            <div className="news-card__text-wrapper">
              <h2 className="news-card__title">{title}</h2>
              <div className="news-card__post-date">{publishedAt}</div>
              <div className="news-card__details-wrapper">
                <p className="news-card__excerpt">{description}</p>
                <a href={url} className="news-card__read-more">
                  Read more <i className="fas fa-long-arrow-alt-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
