import React from 'react'
const NewsItem1 = ({ title, description, url, urlToImage,content,author,publishedAt}) => {
    return (<>
      
        <div className="news-app1">        
            <div className='news-item1'>
            <div className="sidebar">
                <h6>{publishedAt}</h6>             
                <img className='news-img1' src={urlToImage} alt={urlToImage} />                       
                <h3><a href={url}>{title}</a></h3>               
                <p>{description}</p>                
                <p>{content}</p>
                <h5>{author}</h5>
               
            </div>
        </div></div>
        </>
    )
}

export default NewsItem1;