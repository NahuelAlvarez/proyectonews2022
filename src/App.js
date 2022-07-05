import React,{useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Pagination from "./components/Pagination";

function App() {
  
  const [news, setNews] = useState([]);
  const [info, setInfo] = useState({});
  
  const [newsSearch, setNewsSearch] = useState([]);

  const url = "https://newsapi.azurewebsites.net/api/top-headlines?country=ar";

  const url2 = "https://newsapi.azurewebsites.net/api/api/search?keywords=Apple&page=2&pageSize=5";
  
  const fetchNewsSearch = (url2) => {
    fetch(url2)
      .then(response => response.json()
        .then(data => {
          setNewsSearch(data.articles.$values)
        })
        .catch(error => console.error())
      )
  };
  
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
    fetchNewsSearch(url2);
  }, []);
  useEffect(() => {
    fetchNews(url);
  },[]);
  
  return (
    <>
      <Navbar brand="Portal de Noticias"></Navbar>
      <div className="rows">
        <div className="col-6" style={{width:"100%",padding:"20px"}}>
               <a href="/" style={{float:"left"}}><h5>Ulimas Noticias</h5></a>
               <a href="/" style={{ float: "left" }}><h5>/Buscar</h5></a>   
          </div> 
          <div className="col-6" style={{width:"100%",padding:"20px"}}>
            <a href="/" style={{float:"right"}}><h5>Argentina</h5></a>
          </div>
      </div>   
      <div className="container" style={{display:'grid', justifyContent:'center', alignItems:'center'}} >
              
        <News articulos={news}></News>
        <Pagination />
      </div>
    </>
   
  );
}

export default App;
