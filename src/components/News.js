import React,{useEffect,useState}from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News=(props)=> {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [loading,setloading] = useState(true);

  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
    
  
  
  
  const updateNews= async ()=>{
    props.setprogress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=43e2a027e23040e8ac6afe198f5a384a&page=${page}&pagesize=${props.pageSize}`;
      setloading(true);
      let data=await fetch(url);
      props.setprogress(25);
      let parsedData= await data.json();
      props.setprogress(50);
      console.log(parsedData);
      setarticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setloading(false);
      props.setprogress(100);
  }
  useEffect(() => {
    document.title=`${capitalizeFirstLetter(props.category)} - NewsMonkey`
    updateNews();

  },[])
  
  const prevhandler= async ()=>{
    setpage(page-1);
    updateNews(); 
  }
  const nexthandler= async ()=>{
      setpage(page+1);
      updateNews();      
  }
 
  

    
    return (
      <>
      <div className="container" >
      <h2 className='text-center' style={{ margin:'65px',marginTop:'95px'}}>NewsForYou Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <Spinner/>}
      <div className="row" >
        {!loading && articles.map((Element)=>{
          return <div className="col-md-4" key={Element.url}>
          <NewsItem title={Element.title} description={Element.description} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name}/>
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between my-3">
      <button type="button" disabled={page<=1}className="btn btn-dark" onClick={prevhandler}>&larr; prev</button>
      <button type="button" disabled={page>Math.ceil(totalResults/props.pageSize)}className="btn btn-dark" onClick={nexthandler}>next &rarr;</button>
      </div> 
      </div>
      </>
      
    )
  
}
News.defautltProps={
  country:'in',
  pageSize:9,
  category:'general'
}
News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News
