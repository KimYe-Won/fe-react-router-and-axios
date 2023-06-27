import { useNavigate, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import * as api from "../api/api";

const ArticledId = () => {
    const navigate = useNavigate();
    const {articleId}=useParams();
    const [article, setArticle]=useState(null);

    useEffect(() => {
      api.getArticleById(articleId).then((res)=> {
        setArticle(res.data);
        console.log(res.data);
      });
    },[articleId]);

    // const[subject,setSubject]=useState("");
    // const[content,setContent]=useState("");
    
    const ArticleDelete=()=>{
      api.deleteArticle(articleId).then((_) => {
        navigate(-1);
      });
        // alert(`제목: ${subject}\n내용: ${content}`);
      };

      // const ArticleEdit=()=>{
      //   setSubject("");
      //   setContent("");
      // }
    return article === null ? (
      <p>Loading...</p>
    ) : (
    <>
    
    <br />
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <p>작성일: {article.createAt}</p>
      <button onClick={() => navigate(`/articles/${articleId}/edit`)}>수정하기</button>
      <button onClick={ArticleDelete}>제거하기</button>
    
    </>
    );
};

export default ArticledId;