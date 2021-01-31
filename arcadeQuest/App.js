import logo from './logo.svg';
import './App.css';
import home from "./home";
import questions from "./questions";
import Result from "./Result";
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={home}/>
      <Route exact path="/questions" component={questions}/>
      <Route exact path="/Result" component={Result}/>


    </div>
  );
}

export default App;
