import React, { Component } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Document, Page, pdfjs } from 'react-pdf';
import flowers from './images/flowers.jpg';
import cats from './images/cats.jpg';
import artist from './images/artist.jpg';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      <img src={flowers} className="Photo"/>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <img src={cats} className="Photo"/>
      <div className="Contact">
        <h1>Contact</h1>
        <p>jacob.pacheco@student.shu.edu</p>
      </div>
    </div>
  )
}

function Reel() {
  return (
  <div>
    <h2>Reel</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t7HD2xG92-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  );
}

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="Theatre">
        <h2 style={{textAlign:"center"}}>Technical Theatre</h2>
        <table style={{width:"100%"}}>
          <tr class="row title">
           <th class="column left" style={{fontStyle:"normal"}} >Production</th>
           <th class="column middle">Job</th>
           <th class="column right">Director</th>
          </tr>
          <tr class="row content">
           <td class="column left">Much Ado About Nothing</td>
           <td class="column middle">Stage Manager</td>
           <td class="column right">Stephanie ila Silver</td>
          </tr>
          <tr class="row content">
           <td class="column left">The Christmas Cabaret</td>
           <td class="column middle">Board Op./Electric</td>
           <td class="column right">Russell Kaplan</td>
          </tr>
          <tr class="row content">
           <td class="column left">Spitfire Grill</td>
           <td class="column middle">Construction</td>
           <td class="column right">Ken Magos</td>
          </tr>
          <tr class="row content">
           <td class="column left">The Music Man</td>
           <td class="column middle">Student Prod. Lead</td>
           <td class="column right">Jamie Graf</td>
          </tr>
          <tr class="row content">
           <td class="column left">Thoroughly Modern Millie</td>
           <td class="column middle">Student Prod. Lead</td>
           <td class="column right">Jamie Graf</td>
          </tr>
          <tr class="row content">
           <td class="column left">Grease</td>
           <td class="column middle">Production Assistant</td>
           <td class="column right">Jamie Graf</td>
          </tr>
          <tr class="row content">
           <td class="column left">Willy Wonka and the Chocolate Factory</td>
           <td class="column middle">Production Assistant</td>
           <td class="column right">Jamie Graf</td>
          </tr>
          <tr class="row content">
           <td class="column left">Jukebox Time Machine (A One-Act Operetta for ages 9-14)</td>
           <td class="column middle">Lighting/Sound Design</td>
           <td class="column right">Tammy Ehlers</td>
          </tr>
        </table>
      </div>

      <div className="Education">
        <h2>Education</h2>
        <p>B.A in Music; Musical Theatre​ , Seton Hall University, expected May 2021</p>
      </div>

      <div className="Skills">
        <h2>Skills</h2>
        <ul>
          <li>Lighting Console Op.</li>
          <li>Loading, Unloading & Space Optimization</li>
          <li>Driver’s License</li>
          <li>Cue & Blocking Organization</li>
          <li>Video Editing</li>
          <li>Able and Willing to Lift Heavy Objects</li>
        </ul>
      </div>
    </div>
  );
}

function Philosophy() {
  return (
    <div>
      <h2>Philosophy</h2>
      <p style={{fontSize:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

class MyPDF extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file="./PachecoTechResume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={true} />
        </Document>
      </div>
    );
  }
}

export default App;
