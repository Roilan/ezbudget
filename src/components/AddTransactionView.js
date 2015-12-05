import React from 'react';
import { toCapital } from '../utils/helpers.js';
import Calculator from './Calculator.js';
import CategoryOptions from './CategoryOptions.js';


export default class AddTransactionView extends React.Component {
  constructor() {
    super();

    this.state = {
      budgetOptions: ['payee', 'category'],
      payeeSelected: '',
      categorySelected: '',
      displayCategoryOptions: false,
      displayPayeeOptions: false
    }

    this.renderBudgetOptions = this.renderBudgetOptions.bind(this);
    this.handleBudgetClick = this.handleBudgetClick.bind(this);
    this.handleOptionSelection = this.handleOptionSelection.bind(this);
  }

  handleBudgetClick(option) {
    if (option === 'payee') {

    } else if (option === 'category') {
      this.setState({displayCategoryOptions: true});
    }
  }


  renderBudgetOptions() {
    let items = this.state.budgetOptions.map((option, key) => {
      let name = `${option}Selected`;
      let text = `Choose a ${option}`;

      if (this.state[name] !== '') {
        text = toCapital(this.state[name]);
      }

      return (
        <li className='general-category__list-item' key={key}>
          <span>{toCapital(option)}: </span>
          <span className='general-category__list--item-payee' onClick={this.handleBudgetClick.bind(null, option)}>{text}</span>
        </li>
      )
    });

    return items;
  }

  handleOptionSelection(type, name) {
    let display = `display${toCapital(type)}Options`;
    let typeSelected = `${type}Selected`;

    this.state[typeSelected] = name;
    this.state[display] = false;
    this.setState(this.state);
  }

  render() {
    if (this.state.displayCategoryOptions) {
      return (
        <CategoryOptions categories={this.props.categories} handleOptionSelection={this.handleOptionSelection} />
      )
    }

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

        <Calculator
          addNewCategoryItem={this.props.addNewCategoryItem}
          updateView={this.props.updateView}
          previousView={this.props.previousView}
        />
      </div>
    )
  }
}

AddTransactionView.PropTypes = {
  categories: React.PropTypes.object.isRequired,
  addNewCategoryItem: React.PropTypes.func.isRequired,
  updateView: React.PropTypes.func.isRequired,
  currentView: React.PropTypes.string,
  previousView: React.PropTypes.string.isRequired
};