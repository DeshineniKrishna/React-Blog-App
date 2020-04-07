import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Post from './components/Post';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
          <Hero/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/aboutme" exact component={AboutMe}/>
            <Route path="/post/:postid" component={Post}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
