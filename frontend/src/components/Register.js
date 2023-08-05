import React, {useState} from 'react';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (p) => {
        setPassword(p.target.value);
    }

    const handleRegister = () =>{
        console.log("email : ", email, "password : ", password);
    }
    const handleLogin = () =>{
        console.log("email : ", email, "password : ", password);
    }

    return(
        <div className='box'>
            <div className='container'>
                <h2>Register or Login</h2>
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
                    <button onClick={handleRegister} className='registerButton'>
                        Register
                    </button>
                    <button onClick={handleLogin} className='loginButton'>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;