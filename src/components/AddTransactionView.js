import React from 'react';
import TransactionOptions from './TransactionOptions';

export default class AddTransactionView extends React.Component {
  constructor() {
    super();

    this.renderCategoryNames = this.renderCategoryNames.bind(this);
  }

  renderCategoryNames() {
    let categories = this.props.categories;

    let stateArr = Object.keys(categories).map((title, key) => {
      let items = categories[title].map((item, itemKey) => {
        return (
          <li className='general-category__list-item general-category__list-upper' key={itemKey} onClick={() => { console.log(item.name) }}>
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

    return (
      <div className='general-category'>
        {stateArr}
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        {/*this.renderCategoryNames()*/}
        <TransactionOptions />
      </div>
    )
  }
}

AddTransactionView.PropTypes = {
  categories: React.PropTypes.object.isRequired
};