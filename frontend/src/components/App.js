import React from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path='/' element={[<Header/>, <Home/>]}/>
        <Route path='/login' element={[<Header/>, <Login/>]}/>
        <Route path='/register' element={[<Header/>,<Register/>]}/>
        <Route path='/login' element={[<Header/>]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
