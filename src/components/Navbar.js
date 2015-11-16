import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.renderBackBtn = this.renderBackBtn.bind(this);
  }

  handleClick() {
    this.props.updateView('default');
  }

  renderBackBtn() {
    return (
      <button className='navbar__back--button' onClick={this.handleClick}>&larr; Back</button>
    )
  }

  render() {
    let showBackBtn = this.props.showBackBtn === 'default' ? false : true;
    let navBarTitleClass = showBackBtn ? 'navbar__title' : '';

    return (
      <header className='navbar'>
        {showBackBtn ? this.renderBackBtn() : null}
        <h2 className={navBarTitleClass}>ezbudget</h2>
      </header>
    )
  }
}

Navbar.propTypes = {
  showBackBtn: React.PropTypes.string.isRequired,
  updateView: React.PropTypes.func.isRequired
};
