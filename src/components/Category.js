import React from 'react';
import CategoryList from './CategoryList';
import AddTransactionBtn from './AddTransactionBtn';


export default class Category extends React.Component {
  render() {
    return (
      <div className='container'>
        <CategoryList categories={this.props.categories} />
        <AddTransactionBtn {...this.props} />
      </div>
    )
  }
}

Category.propTypes = {
  categories: React.PropTypes.object.isRequired,
  updateView: React.PropTypes.func.isRequired
};