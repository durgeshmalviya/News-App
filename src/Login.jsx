import React from 'react'
import './Dark.css'

const Item = ({ title, description, url, urlToImage,content,author,publishedAt,}) => {
    return (<>

                <Grid container wrap="nowrap">
           <div class="box">                          
                <img  class="" src={urlToImage} alt={urlToImage} loading="fast"/>  
                 <h5 class=""><a href={url}>{title}</a></h5>
                 <p class=""> <h5>{author}</h5></p>
            </div>
           </Grid>
      
        </>
    )
}

export default Item;