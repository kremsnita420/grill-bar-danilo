import React, { useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './AppStyles';
import { GlobalStyles } from './GlobalStyles';
import Home from './Pages/Home';
import Desserts from './Pages/Desserts';
import Drinks from './Pages/Drinks';
import NotFound from './Pages/NotFound';
import Navbar  from '../src/components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {


    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };


  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles />
        <Navbar  toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </div>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/desserts' component={Desserts} />
        <Route path='/drinks' component={Drinks} />
        <Route component={NotFound} />
      </Switch>
      
    </BrowserRouter>
  );
}


export default App;
