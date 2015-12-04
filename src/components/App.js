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

      currentView: 'default'
    }

    this.updateView = this.updateView.bind(this);
    this.switchView = this.switchView.bind(this);
    this.updateCategoryItem = this.updateCategoryItem.bind(this);
  }

  updateView(newView) {
    if (this.state.currentView !== newView) {
      this.setState({currentView: newView});
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
              categories={this.state.categories}
              updateView={this.updateView}
              updateCategoryItem={this.updateCategoryItem}
            />
  }

  updateCategoryItem(name, value) {
    // todo: change this later
    name = name || 'rent';

    console.log(value)
  }

  render() {
    return (
      <div>
        <Navbar updateView={this.updateView} showBackBtn={this.state.currentView} />
        {this.switchView()}
      </div>
    );
  }
}
