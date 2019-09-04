import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import About from './pages/About';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

// console.log(process.env.REACT_APP_API_KEY);

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
