import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import GetObjects from './components/GetObjects.js'
import PostObject from './components/PostObject.js'

function App() {
  return (
    <div className="container jumbotron">
    	<GetObjects/>
    	<hr/><br/>
    	<PostObject/>
    </div>
  );
}

export default App;
