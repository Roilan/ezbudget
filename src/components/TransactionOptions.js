import React from 'react';
import { toCapital } from '../utils/helpers.js';

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
        <li key={key}>
          <span>{toCapital(item)}: </span>
          <span>Choose a {item}</span>
        </li>
      )
    });

    return items;
  }

  render() {
    return (
      <div className='general-category'>
        <ul>
          {this.renderOptions()}

          <li>
            <span>Date: </span>
            <span>Today</span>
          </li>
        </ul>
      </div>
    )
  }
}