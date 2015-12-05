import React from 'react';
import Navbar from './Navbar.js';
import Category from './Category.js';
import AddTransactionView from './AddTransactionView.js';

import '../scss/App.scss';

export default class App extends React.Component {
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
      },

      currentView: 'default',
      previousView: ''
    }

    this.updateView = this.updateView.bind(this);
    this.switchView = this.switchView.bind(this);
    this.addNewCategoryItem = this.addNewCategoryItem.bind(this);
    this.calculateCategoryTotal = this.calculateCategoryTotal.bind(this);
  }

  updateView(newView) {
    if (this.state.currentView !== newView) {
      this.setState({
        previousView: this.state.currentView,
        currentView: newView
      });
    }
  }

  switchView() {
    let view = this.state.currentView;
    let Component;

    switch (view) {
      case 'addTransaction' : Component = AddTransactionView; break;
      default: Component = Category
    }

    window.scrollTo(0, 0);
    return <Component
              {...this.state}
              updateView={this.updateView}
              addNewCategoryItem={this.addNewCategoryItem}
            />
  }

  calculateCategoryTotal(transactions) {
    const total = transactions.map(item => item.value).reduce((prev, next) => prev + next);
    return total;
  }

  addNewCategoryItem(categoryName, name, payee, value) {
    let arrIndex;
    let itemEntry = {payee, value};

    let categories = this.state.categories;
    let filterCategory = categories[categoryName].filter((item, index) => {
      if (item.name === name) {
        arrIndex = index;
        return true;
      } else {
        return false;
      }
    });

    filterCategory = filterCategory[0];

    filterCategory.transactions.push(itemEntry)
    filterCategory.value = this.calculateCategoryTotal(filterCategory.transactions)

    this.setState({categories});
  }

  render() {
    return (
      <div>
        <Navbar updateView={this.updateView} showBackBtn={this.state.currentView} previousView={this.state.previousView} />
        <button onClick={() => console.log(this.state)}>State</button>
        {this.switchView()}
      </div>
    );
  }
}
