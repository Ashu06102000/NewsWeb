import React from "react";
import { useState, useEffect } from "react";
import NewsComponent from "../js/NewsComponent";
import "../CSS/News.css";

function News({ country, category, pageSize,mode }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadData();
  }, [country]);
  async function loadData() {
    const api = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3dc6bcd1ca2a4e9ba327d21fb71a296c&pagesize=${pageSize}`;
    const result = await fetch(api);
    const getResult = await result.json();
    setData(getResult.articles);
    console.log(getResult);
  }
  function Searcher(e) {
    setSearch(e.target.value);
  }
  const NewNews = data.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="searchers">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
            alignItems: "center",
          }}
          className="Search"
        >
          <p
            style={{  color:' rgb(0, 119, 255)', marginRight: "10px", textAlign: "center" }}
          >
            Search News
          </p>
          <input
            style={{
              border: "2px solid Black",
              backgroundColor: 'rgb(0, 119, 255)',
              background: "rgba(rgb(0 119 255 / 76%))",
              borderRadius: "5px",
              height: "28px",
              width: "250px",
              color:'white'
            }}
            onChange={Searcher}
            type="text"
          />
        </div>
      </div>
      <div className="news">
        {NewNews.map((item) => {
          return (
            <div key={item.url}>
              <NewsComponent
                url={item.url}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                publishedAt={item.publishedAt}
                NewsComponent
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
