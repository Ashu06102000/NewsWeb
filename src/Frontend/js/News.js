import React from "react";
import { useState , useEffect } from "react";
import NewsComponent from "../js/NewsComponent";
import '../CSS/News.css';
import PropTypes from 'prop-types';


function News(props) {
  const [data, setData] = useState([]);
 
  useEffect(() => {
   
    loadData();
  }, [])
 async function loadData(){
      const api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3dc6bcd1ca2a4e9ba327d21fb71a296c`;
      const result = await fetch(api);
      const getResult = await result.json();
      setData(getResult.articles);
      console.log(getResult);
    }  
  
  return (
    <div>
      <div className="news">
      {
        data.map((item)=>{
          return <div  key={item.url}>
            <NewsComponent url={item.url} title={item.title} description={item.description} urlToImage={item.urlToImage} publishedAt={item.publishedAt} NewsComponent/>
          </div>
        }
        
        )
      }
      </div>
    </div>
  );
}

News.defaultProps = {
  category:'general',
  country:'in',
}
News.propTypes={
  category:PropTypes.string,
  country:PropTypes.string,

}

export default News;
