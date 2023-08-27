import React, {useState, useContext} from 'react';
import './Createquiz.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { LoginContext } from '../context/LoginContext';



function Createquiz() {
    const {userName} = useContext(LoginContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
    
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
    
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
    
    const handleSubmit = () => {
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Date:', date);
        if(title && description && date){
            const titleinfo = {title, description, date, userName};
            axios.post("http:localhost:5000/createquiz", titleinfo)
            .then(res => {
                if(res.data.message === "Title saved successfully"){
                    alert(res.data.message);
                    navigate('/createquiz/addquestion');
                }  
                else{   
                    alert("some error occured please try again");
                }
            })
        }
        else{
            alert("Invalid input");
        }
    };
    
    return (
        <div className="input-form">
        <h1>Input Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title (100 characters max):</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              maxLength={100}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              rows={4}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>
          <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
}

export default Createquiz;