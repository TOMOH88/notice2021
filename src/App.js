import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Notice from './routes/Notice';
import Board from './routes/Board';


function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail}/>
      <Route path="/notice" component={Notice}/>
      <Route path="/board" component={Board}/>
    </HashRouter>
  );
}

export default App;