import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Listpage from './Listpage';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Router>
//       <Route path="/Listpage" component={Listpage} />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Listpage" component={Listpage} />
      </Switch>
    </div>
  </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(routing, document.getElementById('root'))