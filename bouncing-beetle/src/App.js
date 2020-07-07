import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import flowers from './images/flowers.jpg';
import cats from './images/cats.jpg';
import artist from './images/artist.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>

      <NavPanel />
      <div className="Main">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/reel">
            <Reel />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/philosophy">
            <Philosophy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


    </div>

  );
}

function NavPanel() {
  return(
  <div className="Panel">
    <a href="/" className="TitleLink"><div>Jacob Cuckold</div></a>
    <div className="Links">
      <a href="reel">Reel</a>
      <a href="resume">Resume</a>
      <a href="philosophy">Acting Philosophy</a>
      <a href="contact">Contact</a>
    </div>
  </div>
  )
}

function Home(){
  return(
    <div>
      <img src={artist} className="Photo"/>
      <img src={cats} className="Photo"/>
      <img src={flowers} className="Photo"/>
    </div>
  )
}

function Contact() {
  return <h2>Contact</h2>;
}

function Reel() {
  return <h2>Reel</h2>;
}
function Resume() {
  return <h2>Resume</h2>;
}

function Philosophy() {
  return <h2>Philosophy</h2>;
}

export default App;
