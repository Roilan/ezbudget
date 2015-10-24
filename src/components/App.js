import React from 'react';
import Navbar from './Navbar.js';
import CategoryList from './CategoryList.js';
import AddTransaction from './AddTransaction.js';

import '../scss/App.scss';

export default class App extends React.Component {
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
          {name: 'insurance', value: 130.00}
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <CategoryList categories={this.state.categories} />
          <AddTransaction />
        </div>
      </div>
    );
  }
}
