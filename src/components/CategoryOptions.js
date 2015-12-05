import React from 'react';

export default class CategoryOptions extends React.Component {
  constructor() {
    super();
    this.renderCategoryNames = this.renderCategoryNames.bind(this);
  }

  renderCategoryNames() {
    let categories = this.props.categories;

    let stateArr = Object.keys(categories).map((title, key) => {
      let options = categories[title].map((option, itemKey) => {
        return (
          <li
            className='general-category__list-item general-category__list-upper'
            key={itemKey}
            onClick={this.props.handleOptionSelection.bind(null, 'category', option.name)}>
            {option.name}
          </li>
        )
      });

      return (
        <ul className='general-category__list' key={key}>
          {options}
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

CategoryOptions.PropTypes = {
  categories: React.PropTypes.array.isRequired,
  handleOptionSelection: React.PropTypes.func.isRequired
};