import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AddTransactionView from './components/AddTransactionView';
import { Router, Route, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
      <Route path="addtransaction" component={AddTransactionView} />
      <Route path="add/:type" component={AddTransactionView} />
    </Route>
  </Router>
), document.getElementById('root'));