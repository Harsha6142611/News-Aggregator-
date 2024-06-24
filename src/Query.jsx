import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from 'react-share';
import 'bootstrap/dist/css/bootstrap.min.css';

const Query = ({ query }) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: query,
            apiKey: '9d60a010b6d04b7693904181e600c989'
          }
        });
        setNewsList(response.data.articles);
      } catch (error) {
        console.error('Failed to fetch news', error);
      }
    };

    fetchNews();
  }, [query]);

  const NewsCard = ({ news }) => {
    const [isSaved, setIsSaved] = useState(false);

    const handleBookmark = async () => {
      const local_id = localStorage.getItem('uid');
      try {
        const newswithid = {
          ...news,
          userId: local_id,
        };
        const response = await axios.post(
          'http://localhost:3000/news/articles',
          newswithid
        );
        setIsSaved(true);
        console.log('Article saved with id ', local_id);
        console.log(response.data);
      } catch (error) {
        console.error('Failed to bookmark article', error);
      }
    };

    const imageUrl = news.urlToImage ? news.urlToImage : '/image-not-found-1-scaled.png';

    return (
      <div className="card mb-4 shadow-sm news-card">
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Image Not Found"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: '3em', overflow: 'hidden' }}>
            {news.title}
          </h5>
          <p className="card-text text-muted" style={{ height: '1.5em', overflow: 'hidden' }}>
            {news.author}
          </p>
          <p className="card-text">
            <small className="text-muted">{news.publishedAt}</small>
          </p>
          <p className="card-text news-description" style={{ height: '4em', overflow: 'hidden' }}>
            {news.description}
          </p>
          <a href={news.url} className="btn btn-primary mb-2">
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
            <button
              onClick={handleBookmark}
              disabled={isSaved}
              className={`btn ${isSaved ? 'btn-success' : 'btn-warning'}`}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {newsList.map((news, index) => (
          <div key={index} className="col">
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Query;
