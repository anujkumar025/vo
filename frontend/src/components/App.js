import React, { useState } from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Createquiz from './Createquiz';
import {LoginContext} from './../context/LoginContext'
import AddQuestion from './Addqueston';

function App() {
  const [userEmail, setUserEmail] = useState("");
  return (
    <Router>
      <div>
        <LoginContext.Provider value={{userEmail, setUserEmail}}>
        <Routes>
          <Route path='/' element={[<Header/>, <Home/>]}/>
          <Route path='/login' element={[<Header/>, <Login/>]}/>
          <Route path='/register' element={[<Header/>,<Register/>]}/>
          <Route path='/createquiz' element={[<Header/>,<Createquiz/>]}/>
          <Route path='/createquiz/addquestion' element={[<Header/>,<AddQuestion/>]}></Route>
        </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
