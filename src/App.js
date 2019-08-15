import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="demo-big-content">
          <Layout>
              <Header className="header-color" style={{backgroundColor: "#C4FFFC", color: 'black'}} title={<Link style={{textDecoration: 'none', color: 'black'}} to="/about">Pamyk Charyyeva</Link>} scroll>
                  <Navigation>
                      <Link to="/about">About</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Content>
                  <div className="page-content" />
                  <Main /> 
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
