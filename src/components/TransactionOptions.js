import React from 'react';
import { toCapital } from '../utils/helpers.js';
import TransactionTotal from './TransactionTotal.js';

export default class TransactionOptions extends React.Component {
  constructor() {
    super();

    this.state = {
      options: ['payee', 'category']
    };

    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions() {
    let items = this.state.options.map((item, key) => {
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
      <div>
        <div className='general-category'>
          <ul className='general-category__list'>
            {this.renderOptions()}

            <li className='general-category__list-item'>
              <span>Date:</span>
              <span className='general-category__list--item-payee'>Today</span>
            </li>
          </ul>
        </div>

        <TransactionTotal />
      </div>
    )
  }
}