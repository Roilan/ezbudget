import React from 'react';
import { Link } from 'react-router';

export default class AddTransactionBtn extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor(props) {
    super(props);

    this._bind('handleClick');
  }

  handleClick() {
    //console.log(Object.keys(this.props.categories));
  }

  render() {
    return (
      <Link to='addtransaction' state={this.props.categories}>
        <button className='btnAddTransaction' onClick={this.handleClick}>
          Add Transaction
        </button>
      </Link>
    )
  }
}

AddTransactionBtn.PropTypes = {
  categories: React.PropTypes.object.isRequired
};