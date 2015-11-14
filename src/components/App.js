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
          {name: 'rent', value: 1.00},
          {name: 'internet', value: 0.00},
          {name: 'electricity', value: 0.00},
          {name: 'music', value: 4.99},
        ],
        'Everyday Expenses': [
          {name: 'groceries', value: 200.00},
          {name: 'fuel', value: 40.00},
          {name: 'spending money', value: 50.00},
          {name: 'restaurants', value: 100.00},
          {name: 'clothing', value: 0.00},
          {name: 'household', value: 0.00},
          {name: 'transportation', value: 230.00},
        ],
        'other': [
          {name: 'insurance', value: 130.00},
          {name: 'insurance', value: -130.00},
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
