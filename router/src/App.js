import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
  return <div className="App">
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>;
}

export default App;
