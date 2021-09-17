
import Navbar from './components/header';
import './App.css';
import Chats from "./Chats";

import Tinder from './Tindercard';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Swipe from './Swipe';

function App() {

  return (
  
    <div className="App">
     
     <Router>
       <Navbar/>
       <Switch>
        <Route path="/chat">
            
          <Chats/> 
        </Route>
       <Route path="/"><Tinder />
       
      
       </Route>
       
       </Switch>
     </Router>
    </div>
    
  );
}

export default App;
