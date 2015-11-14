import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AddTransactionView from './components/AddTransactionView';
import { Router, Route } from 'react-router';

ReactDOM.render((
  <Router>
    <Route path='/' component={App}>
      <Route path="addtransaction" component={AddTransactionView} />
    </Route>
  </Router>
), document.getElementById('root'));