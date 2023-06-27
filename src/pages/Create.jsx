import { useNavigate, useParams, Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import * as api from "../api/api";

const Create = () => {
    const navigate = useNavigate();
    const {ownerId} = useParams();
    const[subject,setSubject]=useState("");
    const[content,setContent]=useState("");
    
    const handleSubject=(e)=>{
      setSubject(e.target.value);
    }
    
    const handleContent=(e)=>{
      setContent(e.target.value)
    }

    const handleSubmit = () => {
      api
      .createArticle(ownerId, subject, content)
      .then((_) => {
        navigate(-1);
      })
      .catch((err) => {
        alert(err);
      });
    }

    return (
    <>
    <h1>{ownerId}님에게 방명록</h1>
    
      <input type = "text" placeholder="제목" onChange={handleSubject}  value={subject}/>
      <br />
      <textarea type = "text" placeholder="본문" onChange={handleContent} value={content}/>
      <br />
    <button onClick={handleSubmit}>방명록 남기기!</button>
    </>
    );
};

export default Create;
