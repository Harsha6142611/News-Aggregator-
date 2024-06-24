import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const Bookmark = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const showBookmarks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/news/articles");
        const currentUserId = localStorage.getItem("uid");
        const data = response.data;
        
        // Filter articles for the current user
        const currentUserArticles = data.filter(article => article.userId === currentUserId);
        
        setNewsList(currentUserArticles);
      } catch (error) {
        console.error("Failed to fetch bookmarked articles", error);
        setNewsList([]);
      }
    };

    showBookmarks();
  }, []);

  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/news/articles/${id}`);
      setNewsList(newsList.filter((article) => article._id !== id));
      alert("Article Deleted");
      console.log("Article Deleted -", id);
    } catch (error) {
      console.error("Failed to remove bookmarked article", error);
    }
  };

  const NewsCard = ({ news }) => {
    const imageUrl = news.urlToImage ? news.urlToImage : "data:image/png;base64,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";

    return (
      <div className="card mb-4 shadow-sm news-card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Image Not Found"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "3em", overflow: "hidden" }}>
            {news.title}
          </h5>
          <p className="card-text text-muted" style={{ height: "1.5em", overflow: "hidden" }}>
            {news.author}
          </p>
          <p className="card-text">
            <small className="text-muted">{news.publishedAt}</small>
          </p>
          <p className="card-text news-description" style={{ height: "4em", overflow: "hidden" }}>
            {news.description}
          </p>
          <a href={news.url} className="btn btn-primary mb-2" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <FacebookShareButton url={news.url} hashtag="#NewsAggregator">
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <WhatsappShareButton title="Checkout this News Article - " url={news.url}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <EmailShareButton subject="Checkout this News Article - " body={news.url}>
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
            <div className="mt-2">
              <button onClick={() => deleteArticle(news._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      {newsList.length === 0 ? (
        <p>No Bookmarks Present</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {newsList.map((news, index) => (
            <div key={index} className="col">
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
