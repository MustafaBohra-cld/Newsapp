import React, {useState} from 'react'
import { useEffect } from 'react';
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
  const[loading,setloading]=useState(true)
  const[articles,setarticles]=useState([])
  const[page,setpage]=useState(1)

  const[totalResults,settotalResults]=useState(0)

  // document.title= `${props.category} - Newsmonkey`




  const updatepgno=async (pgno)=>{
    props.setprogress(10)
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pgno}&pageSize=${props.pageSize}`
    setloading(true)
    //  setState({loading:true})
    let data=await fetch(url) 
    props.setprogress(30)
    let pdata=await data.json()
    props.setprogress(70)
    console.log(pdata)
    //  setState({articles:pdata.articles})
    console.log("pre")
    setarticles(pdata.articles)
    setloading(false)
    settotalResults(pdata.totalResults)
    
    
    props.setprogress(100)
  }
 useEffect(()=>{  
    updatepgno();
  },[])

 
 

  
  
  const prepg = async ()=>{
    
     setpage(page - 1)
     updatepgno(page - 1) 
  }
  const nextpg = async ()=>{
    
        
         setpage(page + 1,)
         updatepgno(page + 1) 
      }
      
      const fetchMoreData=async ()=>{
        setpage(page + 1)
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
        //  setState({loading:true})
        let data=await fetch(url) 
        let pdata=await data.json()
        console.log(pdata)
        //  setState({articles:pdata.articles})
        console.log("pre")
        setarticles(articles.concat(pdata.articles))
        settotalResults(pdata.totalResults)
        //  setState({
    
        //   articles: state.articles.concat(pdata.articles),
        //   totalResults: pdata.totalResults,
        //   // loading:false,
        // })
        

}

    
    
    return (
      <>
            <h2 className='my-3'>NewsMB - Top Headlines</h2>
            { loading && <Spinner/>}
            <InfiniteScroll
              dataLength={articles.length} //This is important field to render the next data
              next={ fetchMoreData}
              hasMore={ articles.length !=  totalResults}
              loader={<Spinner/>}
              
              >
            
<div className="container my-3">
            <div className="row">
          {  articles.map((element)=>{return <div className="col-md-3" key={element.url}><Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author?element.author:"unknown"} date={element.publishedAt}  source={element.source.name}  pageno={ page}/></div>})}
  
          </div>
</div>
              </InfiniteScroll>
                
                
                
        
        {/* <div d-flex class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary " disabled={ state.page<=1} onClick={ prepg}>&larr; Previous</button>
        <p>{ state.page}</p>
        <button type="button" class="btn btn-primary " disabled={ state.page +1 > Math.ceil( state.totalResults/props.pageSize)} onClick={ nextpg}> Next &rarr;</button>
        </div> */}
        {/* { state.loading && <Spinner/>} */}


        
        
      </>
    )
  
}

export default News
