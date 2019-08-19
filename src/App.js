import React from 'react';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
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
                      <Link to="/resume"> My Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                     
                  </Navigation>
              </Header>
              <Content>
                  <div className="page-content" />
                  <Main /> 
              </Content>
              <Footer className="footer" size="mini">
                  <FooterSection type="left" logo="© 2019 Pamyk Charyyeva. All Rights Reserved.">            
                      <FooterLinkList type="right">
                      <div className="footer-social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/pamyk-charyyeva/" rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-linkedin-square" aria-hidden="true"  />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/pamykcharyyeva" rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-github-square" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/pamyk_coding" rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>


                    </div>
                      </FooterLinkList>
                      </FooterSection>
                
              </Footer>

          </Layout>
      </div>
    </div>
  );
}

export default App;
