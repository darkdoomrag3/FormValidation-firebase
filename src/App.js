import React from 'react';
import Navigation from './components/navigation/navigation';
import './App.css';
import Movies from './components/movies/Movies';

import Search from '../src/components/search/search'
import {

  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import Aouth from './components/autentication/Aouth';



class App extends React.Component {
  constructor() {
    super()

  }

  render() {

    return (
      <>


        <Navigation>
     
  
            <Switch>
      

              <Route path="/" exact component={Movies} />
           
        
      
              <Route path="/aouth" component={Aouth} />

            </Switch>
         
         </Navigation>
    
      

      
      


      </>

    )



  }

}

export default App;
