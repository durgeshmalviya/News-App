import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './newsitem.css'
import Item from './NewsItem'

const Tech = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=228f63915247489e8b2fe5a95b134f50`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map(article => {
                return(
                    <Item
                        publishedAt={article.publishedAt}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}                       
                        author={article.author}
                        content={article.content}
                    />
                )
            })}
        </div>
    )
}

export default Tech;