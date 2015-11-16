import React from 'react';

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
          <li key={itemKey}>
            {item.name}
          </li>
        )
      });

      return (
        <ul key={key}>
          {items}
        </ul>
      )
    });

    return (
      <div>
        {stateArr}
      </div>
    )
  }

  render() {
    return (
      <div className='container'>
        <h1>hello transaction</h1>
        {this.renderCategoryNames()}
      </div>
    )
  }
}

AddTransactionView.PropTypes = {
  categories: React.PropTypes.object.isRequired
};