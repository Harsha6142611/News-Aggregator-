// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./index.css";
// import {
//   FacebookShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
// } from "react-share";
// import { FacebookIcon, WhatsappIcon, EmailIcon } from "react-share";

// const NewsCard = ({ news }) => {
//   const [isSaved, setIsSaved] = useState(false);

//   const handleBookmark = async () => {
//     const local_id = localStorage.getItem("uid");
//     try {
//       const newswithid = {
//         ...news,
//         userId: local_id,
//       };
//       console.log(newswithid);
//       const response = await axios.post(
//         "http://localhost:3000/news/articles",
//         newswithid
//       );
//       console.log("Saving article with id ", local_id);
//       console.log(response.data);
//       setIsSaved(true);
//     } catch (error) {
//       console.error("Failed to bookmark article", error);
//     }
//   };

//   const imageUrl = news.urlToImage
//     ? news.urlToImage
//     : "/image-not-found-1-scaled.png";
//   return (
//     <div className="border p-4 m-2 flex flex-col rounded-lg shadow-lg transform transition duration-100 ease-in-out hover:scale-105">
//       <h2 className="font-bold text-xl mb-2 flex-grow">{news.title}</h2>
//       <p className="text-gray-700 text-base">{news.author}</p>
//       <a href={news.url}>
//         <img
//           src={imageUrl}
//           alt="Image Not found"
//           className="w-full object-cover h-48 rounded-lg shadow-lg"
//         />
//       </a>
//       <p className="text-gray-700 text-base">{news.publishedAt}</p>
//       <p className="clamp-4">{news.description}</p>
//       <div className="flex justify-between">
//         <a href={news.url} className="text-blue-500 hover:text-blue-800 mt-4">
//           Read more
//         </a>
//         <div className="flex gap-3 mt-2">
//           <FacebookShareButton url={news.url} hashtag="#NewsAggregator">
//             <FacebookIcon
//               className="w-[55px] hover:opacity-50 hover:duration-200 hover:scale-125"
//               logoFillColor="white"
//               round={true}
//             ></FacebookIcon>
//           </FacebookShareButton>

//           <WhatsappShareButton
//             title="Checkout this News Article - "
//             url={news.url}
//           >
//             <WhatsappIcon
//               className="w-[55px] hover:opacity-50 hover:duration-200 hover:scale-125"
//               logoFillColor="white"
//               round={true}
//             ></WhatsappIcon>
//           </WhatsappShareButton>
//           <EmailShareButton
//             subject="Checkout this News Article - "
//             body={news.url}
//           >
//             <EmailIcon
//               className="w-[55px] hover:opacity-50 hover:duration-200 hover:scale-125"
//               logoFillColor="white"
//               round={true}
//             ></EmailIcon>
//           </EmailShareButton>
//         </div>
//         <button
//           onClick={handleBookmark}
//           disabled={isSaved}
//           className="p-2 rounded w-fit align-center bg-blue-800 text-zinc-100 hover:bg-blue-600"
//         >
//           {isSaved ? "Saved" : "Save"}
//         </button>
//       </div>
//     </div>
//   );
// };

// const Custom = () => {
//   const [newsList, setNewsList] = useState([]);
//   const [category, setCategory] = useState("");
//   const [country, setCountry] = useState("");
//   const [sources, setSources] = useState("");
//   const [query, setQuery] = useState("");
//   const [from, setfrom] = useState("");
//   const [input, setInput] = useState(false);
//   const [len, setlen] = useState(0);

//   const shownothing = () => {
//     return (
//       <>
//         <div> SORRY , NO ARTICLES AVAILABLE RIGHT NOW .....</div>
//       </>
//     );
//   };

//   const fetchNews = async () => {
//     try {
//       let params = {
//         apiKey: "56fd86ebd85b4a4aae7f49eace6aee7f",
//       };
//       let value = "top-headlines";
//       if (category !== "") params.category = category;
//       if (country !== "") params.country = country;
//       if (sources !== "") params.sources = sources; // abc-news,bbc-news,al-jazeera-english,associated-press,bbc-sport,bloomberg,business-insider,buzzfeed,cbc-news,google-news,the-hindu
//       if (query !== "") params.q = query;
//       if (from !== "") {
//         params.from = from;
//         value = "everything";
//       }

//       console.log(params);
//       const response = await axios.get(`https://newsapi.org/v2/${value}`, {
//         params: params,
//       });

//       setNewsList(response.data.articles);
//       setInput(true);
//       setlen(response.data.articles.length);
//       if (len === 0) {
//         shownothing;
//       }
//       console.log(response.data.articles);
//     } catch (error) {
//       return <p>NO ARTICLES AVAILABLE</p>;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     fetchNews();
//   };

//   return (
//     <>
//       <div className="flex flex-col gap-4">
//         <form
//           className="border-3 border-solid p-5 rounded-xl flex flex-col gap-y-4 justify-center align-items-center"
//           onSubmit={handleSubmit}
//         >
//            <strong><b><h1 >Enter based on your desire</h1></b></strong>
//           <input
//             type="text"
//             className="p-2 rounded"
//             value={category}
//             placeholder="Category"
//             onChange={(e) => {
//               setCategory(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             className="p-2 rounded"
//             value={country}
//             placeholder="Country"
//             onChange={(e) => {
//               setCountry(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             className="p-2 rounded"
//             value={sources}
//             placeholder="Sources"
//             onChange={(e) => {
//               setSources(e.target.value);
//             }}
//           />
//           <input
//             type="text"
//             className="p-2 rounded"
//             value={query}
//             placeholder="Query"
//             onChange={(e) => {
//               setQuery(e.target.value);
//             }}
//           />
//           <div className="flex gap-x-9">
//             <label>From</label>
//             <input
//               type="date"
//               value={from}
//               onChange={(e) => setfrom(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="p-2 text-center bg-blue-600 text-zinc-200 hover:bg-blue-400"
//           >
//             Send
//           </button>
//         </form>
//         {input && len != 0 && (
//           <div className="flex justify-center px-20 ">
//             <div className="grid grid-cols-3 gap-4 px-8 pb-20">
//               {newsList.length !== 0 &&
//                 newsList
//                   .filter((news) => news.title !== "[Removed]")
//                   .map((news, index) => <NewsCard key={index} news={news} />)}
//             </div>
//           </div>
//         )}
//         {input && len === 0 && (
//           <div>
//             <div className="mt-10 text-4xl ">NO ARTICLES FOUND</div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Custom;

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import "./index.css";

const NewsCard = ({ news }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleBookmark = async () => {
    const local_id = localStorage.getItem("uid");
    try {
      const newswithid = {
        ...news,
        userId: local_id,
      };
      console.log(newswithid);
      const response = await axios.post(
        "http://localhost:3000/news/articles",
        newswithid
      );
      console.log("Saving article with id ", local_id);
      console.log(response.data);
      setIsSaved(true);
    } catch (error) {
      console.error("Failed to bookmark article", error);
    }
  };

  const imageUrl = news.urlToImage ? news.urlToImage : "/image-not-found-1-scaled.png";
  return (
    <div className="card mb-4 shadow-sm news-card">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Image Not Found"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ height: "3em", overflow: "hidden" }}>{news.title}</h5>
        <p className="card-text text-muted" style={{ height: "1.5em", overflow: "hidden" }}>{news.author}</p>
        <p className="card-text"><small className="text-muted">{news.publishedAt}</small></p>
        <p className="card-text news-description" style={{ height: "4em", overflow: "hidden" }}>{news.description}</p>
        <a href={news.url} className="btn btn-primary mb-2">Read more</a>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
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
            className="btn btn-warning"
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Custom = () => {
  const [newsList, setNewsList] = useState([]);
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [sources, setSources] = useState("");
  const [query, setQuery] = useState("");
  const [from, setfrom] = useState("");
  const [input, setInput] = useState(false);
  const [len, setlen] = useState(0);

  const fetchNews = async () => {
    try {
      let params = {
        apiKey: "56fd86ebd85b4a4aae7f49eace6aee7f",
      };
      let value = "top-headlines";
      if (category) params.category = category;
      if (country) params.country = country;
      if (sources) params.sources = sources;
      if (query) params.q = query;
      if (from) {
        params.from = from;
        value = "everything";
      }

      console.log(params);
      const response = await axios.get(`https://newsapi.org/v2/${value}`, {
        params: params,
      });

      setNewsList(response.data.articles);
      setInput(true);
      setlen(response.data.articles.length);
    } catch (error) {
      console.error("Failed to fetch news", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchNews();
  };

  return (
    <div className="container mt-5">
      <form className="border p-4 rounded bg-light" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Enter based on your desire</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={country}
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={sources}
            placeholder="Sources"
            onChange={(e) => setSources(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={query}
            placeholder="Query"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="from" className="form-label">From</label>
          <input
            type="date"
            className="form-control"
            value={from}
            onChange={(e) => setfrom(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send
        </button>
      </form>

      {input && len !== 0 && (
        <div className="row mt-4">
          {newsList.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      )}

      {input && len === 0 && (
        <div className="mt-4 text-center">
          <h2>NO ARTICLES FOUND</h2>
        </div>
      )}
    </div>
  );
};

export default Custom;
