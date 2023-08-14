import React, {useContext} from 'react';
import { LoginContext } from '../context/LoginContext';
import './Logcheck.css';

function Logcheck() {
    const {userName, setUserName} = useContext(LoginContext);
    function logoutprocess(){
        setUserName("");
    }
    if (userName.length === 0) {
        return (
            <div className='Logcontainer'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <a href="/login" className='header__optionLineTwo'>Sign In</a>
            </div>
        )
    }
    else {
        return (
            <div className='Logcontainer'>
                <a href='/#' className='header__optionLineTwo'>{userName}</a>
                <a href='/' className='header__optionLineTwo' onClick= {logoutprocess}>Logout</a>
            </div>
        )
    }
}

export default Logcheck;