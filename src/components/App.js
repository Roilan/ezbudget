import React from 'react';
import Navbar from './Navbar.js';

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
          {name: 'rent', value: 0.00},
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

    this._bind('renderCategories');
  }

  renderCategories() {
    let stateCategories = this.state.categories;

    function addValueColor(value) {
      let val = parseInt(value, 10);
      let color;

      if (val === 0) {
        color = 'lightGrey';
      } else if (val > 1) {
        color = 'green';
      } else if (val <= -1) {
        color = 'red';
      }

      return color;
    }

    let categories = Object.keys(stateCategories).map((title, key) => {

      let categoryItems = stateCategories[title].map((item, itemKey) => {
        let colorClass = addValueColor(item.value);
        let name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1, item.name.length);

        return (
          <li className='category__list--item' key={itemKey}>
            <span>{name}</span>
            <span className={`category__list--item-value ${colorClass}`}>${item.value.toFixed(2)}</span>
          </li>
        )
      });

      return (
        <div className='category' key={key}>
          <h3 className='category__title'>{title}</h3>
          <ul className='category__list'>
            {categoryItems}
          </ul>
        </div>
      )
    });

    return (
      <div>
        {categories}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}
