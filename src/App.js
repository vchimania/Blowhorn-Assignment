import { Route,Switch } from 'react-router-dom';
import './App.css';
import Features from './Features';
import Blog from './Blog';
import Content from './Content';
import Home from './Home';
import Menu from './Menu';

function App() {
  return (
    <>
    <Menu/>
    <Switch>
    <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/features" component={Features}/>
    <Route exact path="/blog" component={Blog}/>
    <Route exact path="/content" component={Content}/>
    </div>
  </Switch>
    </>
  );
}

export default App;
