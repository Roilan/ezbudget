import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor(props) {
    super(props);

    this._bind('renderBackBtn');
  }

  renderBackBtn() {
    return (
      <Link to='/' className='navbar__back--button'>
        <button className='navbar__back--button'>&larr; Back</button>
      </Link>
    )
  }

  render() {
    var navBarTitleClass = this.props.showBackBtn ? 'navbar__title' : '';

    return (
      <header className='navbar'>
        {this.props.showBackBtn ? this.renderBackBtn() : null}
        <h2 className={navBarTitleClass}>ezbudget</h2>
      </header>
    )
  }
}

Navbar.propTypes = {
  showBackBtn: React.PropTypes.object
};
