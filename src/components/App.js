import React from 'react';
import Navbar from './Navbar.js';
import Category from './Category.js';

import '../scss/App.scss';

export default class App extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor() {
    super();

    this.state = {
      categories: {
        'Monthly Bills': [
          {name: 'rent', value: 1.00, transactions: []},
          {name: 'internet', value: 0.00, transactions: []},
          {name: 'electricity', value: 0.00, transactions: []},
          {name: 'music', value: 4.99, transactions: []}
        ],
        'Everyday Expenses': [
          {name: 'groceries', value: 200.00, transactions: []},
          {name: 'fuel', value: 40.00, transactions: []},
          {name: 'spending money', value: 50.00, transactions: []},
          {name: 'restaurants', value: 100.00, transactions: []},
          {name: 'clothing', value: 0.00, transactions: []},
          {name: 'household', value: 0.00, transactions: []},
          {name: 'transportation', value: 230.00, transactions: []}
        ],
        'other': [
          {name: 'insurance', value: 130.00, transactions: []},
          {name: 'insurance', value: -130.00, transactions: []}
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar showBackBtn={this.props.children} />
        {this.props.children || <Category categories={this.state.categories} />}
      </div>
    );
  }
}
