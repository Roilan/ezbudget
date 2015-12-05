import React from 'react';
import Keypad from './Keypad.js';

export default class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: 0.00,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'K']
    };

    this.updateAmount = this.updateAmount.bind(this);
  }

  updateAmount(option) {
    // TODO: figure out decimals later
    if (typeof(option) === 'number') {
      this.state.amount += option;

      this.setState(this.state);
    }

    if (option === 'K' && this.state.amount !== 0) {
      // todo: bring in the budget category and use that as name
      this.props.addNewCategoryItem('Monthly Bills', 'internet', 'landlord', this.state.amount);
      this.props.updateView(this.props.previousView);
    }
  }

  render() {
    return (
      <div>
        <div className='transaction-total'>
          <p>${this.state.amount}</p>
        </div>

        <div className='transaction-numbers'>
          <Keypad options={this.state.options.slice(0, 3)} onClick={this.updateAmount} />
          <Keypad options={this.state.options.slice(3, 6)} onClick={this.updateAmount} />
          <Keypad options={this.state.options.slice(6, 9)} onClick={this.updateAmount} />
          <Keypad options={this.state.options.slice(9, 12)} onClick={this.updateAmount} />
        </div>
      </div>
    )
  }
}

Calculator.propTypes = {
  addNewCategoryItem: React.PropTypes.func.isRequired,
  updateView: React.PropTypes.func.isRequired,
  previousView: React.PropTypes.string.isRequired
}