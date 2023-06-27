import { useNavigate, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import * as api from "../api/api";

const OwnerId = () => {
    const navigate = useNavigate();
    const {ownerId} = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        api.getArticleByOwnerId(OwnerId).then((res) => {
            setArticles(res.data);
        });
        console.log(articles);
    },[ownerId])

    return (
    <>
    <h1>{ownerId}님의 방명록</h1>

    {articles.length ? (
        <ul>
            {articles.map((article)=> {
                return(
                    <li key={article.id}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </li>
                );
            })}
        </ul>
    ) : (
        <p>방명록이 없습니다.</p>
    )}
    
    <button onClick={() => navigate(`/${ownerId}/create`)}>방명록 남기기</button>
    </>
    );
};

export default OwnerId;