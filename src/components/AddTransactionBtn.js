import React from 'react';

export default class AddTransactionBtn extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor(props) {
    super(props);

    this._bind('handleClick');
  }

  handleClick() {
    this.props.updateView('addTransaction');
  }

  render() {
    return (
      <button className='btnAddTransaction' onClick={this.handleClick}>
        Add Transaction
      </button>
    )
  }
}

AddTransactionBtn.PropTypes = {
  categories: React.PropTypes.object.isRequired,
  updateView: React.PropTypes.func.isRequired
};