import { useNavigate, useParams, Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import * as api from "../api/api";

const Edit = () => {
    const navigate = useNavigate();
    const {articleId} = useParams();
    const[subject,setSubject]=useState("");
    const[content,setContent]=useState("");
    
    useEffect(() => {
      api.getArticleById(articleId).then((res => {
        setSubject(res.data.subject);
        setContent(res.data.content);
      }));
    },[articleId])

    const handleSubject=(e)=>{
      setSubject(e.target.value);
    }
    
    const handleContent=(e)=>{
      setContent(e.target.value)
    }

    const handleSubmit = () => {
      api
      .createArticle(articleId, subject, content)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
    }

    return (
    <>
    <input type="text" placeholder="제목" onChange={handleSubject}  value={subject}/>
      <br />
      <textarea type="text" placeholder="본문" onChange={handleContent} value={content}/>
      <br />
    
    <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
    );
};

export default Edit;