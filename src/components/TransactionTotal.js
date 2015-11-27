import React from 'react';

export default class TransactionTotal extends React.Component {
  constructor() {
    super();

    this.state = {
      amount: 0.00,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'X', 0, 'K']
    };

    this.renderOptions = this.renderOptions.bind(this);
    this.updateAmount = this.updateAmount.bind(this);
  }

  renderOptions(optionsArr) {
    const options = optionsArr.map((option, key) => {
      return (
        <li className='transaction-numbers__list-item' key={key} onClick={this.updateAmount.bind(null, option)}>
          {option}
        </li>
      )
    });

    return (
      <ul className='transaction-numbers__list'>
        {options}
      </ul>
    )
  }

  updateAmount(option) {
    // TODO: figure out decimals later
    if (typeof(option) === 'number') {
      this.state.amount += option;
    }

    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <div className='transaction-total'>
          <p>${this.state.amount}</p>
        </div>

        <div className='transaction-numbers'>
          {this.renderOptions(this.state.options.slice(0, 3))}
          {this.renderOptions(this.state.options.slice(3, 6))}
          {this.renderOptions(this.state.options.slice(6, 9))}
          {this.renderOptions(this.state.options.slice(9, 12))}
        </div>
      </div>
    )
  }
}