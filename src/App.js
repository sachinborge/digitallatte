import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/Home';
import who_we_are from './components/who-we-are/Who-we-are';
import OurMotto from './components/our-motto/OurMotto';
import OurExpertise from './components/our-expertise/OurExpertise';
import Clientele from './components/clientele/Clientele';
import CaseStudies from'./components/case-studies/CaseStudies';
import Blogs from './components/blog/Blogs';
import Careers from './components/careers/Career';
import Contact from './components/contact-us/Contact'
import Navbar from './components/Navbar';
function App() {

  return (
    <>

    <Router>
    <Navbar />
    {/* <Menu /> */}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={who_we_are}/>
      <Route path="/ourmotto" component={OurMotto}/>
      <Route path="/expertise" component={OurExpertise}/>
      <Route path="/clientele" component={Clientele}/>
      <Route path="/case_studies" component={CaseStudies}/>
      <Route path="/blogs" component={Blogs}/>
      <Route path="/careers" component={Careers}/>
      <Route path="/contact" component={Contact}/>

      {/* digital */}
      



    </Router>
      
  </>
    )
}
export default App;
