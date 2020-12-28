import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Home from './containers/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUS} />
        <Route path="/post/:postid" component={Post} />
      </div>
    </Router>
  );
}

export default App;
