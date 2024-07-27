import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import './App.css'; 

const App = () => {
  return (
    // style={{backgroundColor: '#D0C9EA'}}
    <div className="App" style={{}} >   
        <Navbar />
      <br/>

      <div class="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Welcome To My Portfolio
            </text>
          </svg>
      </div>
      <br/>
      <About />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Contact />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <Projects />
      <footer>
        <p>&copy; 2024 Divya Dhanak</p>
      </footer>
      </div>

  );
}

export default App;
