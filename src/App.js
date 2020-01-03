import React from 'react';
import Home from './component/Home';
import Dress from './component/Dresses';
import Blouses from './component/Blouses';
import Tshirts from './component/Tshirts';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return(
      <div>
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/dress" component={Dress} />
            <Route path="/blouses" component={Blouses} />
            <Route path="/tshirts" component={Tshirts} />
        </BrowserRouter>
      </div>
    )
}

export default App ;