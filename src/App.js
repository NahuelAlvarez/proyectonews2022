import React,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Pagination from "./components/Pagination";

function App() {
  
  const [news, setNews] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://newsapi.azurewebsites.net/api/top-headlines?country=ar";

  const fetchNews = (url) => {
    fetch(url)
    .then(response => response.json()
    .then(data => {
      setNews(data.articles.$values)
      setInfo(data.totalResults)
    }) 
    .catch(error => console.error())
  )};

  const onPrevious = () =>{
    
  }

  const onNext = () => {
    
  }


  useEffect(() => {
    fetchNews(url);
  },[]);
  
  return (
    <>
      <Navbar brand="Portal de Noticias"></Navbar>
      <div className="container">
          <Pagination />
          <News articulos={news}></News>
          <Pagination />
      </div>
    </>
   
  );
}

export default App;
