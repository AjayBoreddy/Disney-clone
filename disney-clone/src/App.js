import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Switch>
         <Route exact  path ='/' >   
            <Login/>      
          </Route>
           <Route path ='/home' >   
            <Home />      
           </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
