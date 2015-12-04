import React from 'react';
import { toCapital } from '../utils/helpers.js';
import Calculator from './Calculator.js';

class CategoryOptions extends React.Component {
  constructor() {
    super();
    this.renderCategoryNames = this.renderCategoryNames.bind(this);
  }

  renderCategoryNames() {
    let categories = this.props.categories;

    let stateArr = Object.keys(categories).map((title, key) => {
      let items = categories[title].map((item, itemKey) => {
        return (
          <li
              className='general-category__list-item general-category__list-upper'
              key={itemKey}
              onClick={() => { console.log(item.name) }}>
            {item.name}
          </li>
        )
      });

      return (
        <ul className='general-category__list' key={key}>
          {items}
        </ul>
      )
    });

    return stateArr;
  }

  render() {
    return (
      <div className='general-category'>
        {this.renderCategoryNames()}
      </div>
    )
  }
}


export default class AddTransactionView extends React.Component {
  constructor() {
    super();

    this.state = {
      budgetOptions: ['payee', 'category']
    }

    this.renderBudgetOptions = this.renderBudgetOptions.bind(this);
  }


  renderBudgetOptions() {
    let items = this.state.budgetOptions.map((item, key) => {
      return (
        <li className='general-category__list-item' key={key}>
          <span>{toCapital(item)}: </span>
          <span className='general-category__list--item-payee'>Choose a {item}</span>
        </li>
      )
    });

    return items;
  }

  render() {
    return (
      <div className='container'>

        <div className='general-category'>
          <ul className='general-category__list'>
            {this.renderBudgetOptions()}

            <li className='general-category__list-item'>
              <span>Date:</span>
              <span className='general-category__list--item-payee'>Today</span>
            </li>
          </ul>
        </div>
        {/* <CategoryOptions categories={this.props.categories} /> */}
        <Calculator updateCategoryItem={this.props.updateCategoryItem} />
      </div>
    )
  }
}

AddTransactionView.PropTypes = {
  categories: React.PropTypes.object.isRequired
};