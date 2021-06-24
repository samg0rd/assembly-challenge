import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Post from './pages/Post'

export default function App() {
  return (
    <Router>
      <div className="App">        
        <Switch>  
          <Route path="/post">
            <Post />
          </Route>                  
          <Route path="/">
            <Home />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}
