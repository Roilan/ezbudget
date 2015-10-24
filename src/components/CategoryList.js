import React from 'react';

export default class CategoryList extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor(props) {
    super(props);

    this._bind('renderCategories');
  }

  addValueColor(value) {
    let val = parseInt(value, 10);
    let color;

    if (val === 0) {
      color = 'lightGrey';
    } else if (val >= 1) {
      color = 'green';
    } else if (val <= -1) {
      color = 'red';
    }

    return color;
  }

  renderCategories() {
    let propCategories = this.props.categories;

    let categories = Object.keys(propCategories).map((title, key) => {

      let categoryItems = propCategories[title].map((item, itemKey) => {
        let colorClass = this.addValueColor(item.value);
        let name = item.name.slice(0, 1).toUpperCase() + item.name.slice(1, item.name.length);

        return (
          <li className='category__list--item' key={itemKey}>
            <span>{name}</span>
            <span className={`category__list--item-value ${colorClass}`}>${item.value.toFixed(2)}</span>
          </li>
        )
      });

      return (
        <div className='category' key={key}>
          <h3 className='category__title'>{title}</h3>
          <ul className='category__list'>
            {categoryItems}
          </ul>
        </div>
      )
    });

    return (
      <div>
        {categories}
      </div>
    )
  }

  render() {
    return (
      <div className='spaceBottom'>
        {this.renderCategories()}
      </div>
    )
  }
}