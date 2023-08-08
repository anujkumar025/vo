import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (p) => {
        setPassword(p.target.value);
    }

    const handleLogin = () =>{
        // console.log("email : ", email, "password : ", password);
        if(email && password){
            const user = {email, password};
            axios.post("http://localhost:5000/register", user)
            .then(res => {
                alert(res.data.message);
                navigate('/');
            })
        }
        else{
            alert("Invalid input");
        }
    }

    return(
        <div className='box'>
            <div className='container'>
                <h2>Login</h2>
                <div className='formGroup'>
                    <label>Email : </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input"
                    />
                </div>
                <div className='formGroup'>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className='input'
                    />
                </div>
                <div className='buttonGroup'>
                    <button onClick={handleLogin} className='loginButton'>
                        Login
                    </button>
                    <button className='registerButton'>
                        <Link to="/register">Register</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;