import React from "react";



// Components //
import { Cards , Chart , CountryPicker } from './components';

import AppStyles from './App.css';


function App() {
  return (
      <div className='mainCont'>
           <CountryPicker />
           <Cards />
          
      </div>
      ) 

}

export default App;
