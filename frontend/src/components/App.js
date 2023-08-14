import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import {LoginContext} from './../context/LoginContext'
import Createquiz from './Createquiz';

function App() {
  const [userName, setUserName] = useState("");
  return (
    <Router>
      <div>
        <LoginContext.Provider value={{userName, setUserName}}>
        <Routes>
          <Route path='/' element={[<Header/>, <Home/>]}/>
          <Route path='/login' element={[<Header/>, <Login/>]}/>
          <Route path='/register' element={[<Header/>,<Register/>]}/>
          <Route path='/createquiz' element={[<Header/>,<Createquiz/>]}/>
        </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
