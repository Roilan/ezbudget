import React from 'react';

export default class Navbar extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }

  constructor(props) {
    super(props);

    this._bind('renderBackBtn');
  }

  renderBackBtn() {
    var buttonType = this.props.buttonType;

    if (buttonType === 'back') {
      return (
        <button className='navbar__back--button'>&larr; Back</button>
      )
    }

    return '';
  }

  render() {
    var navBarTitleClass = this.props.buttonType ? 'navbar__title' : '';

    return (
      <header className='navbar'>
        {this.renderBackBtn()}
        <h2 className={navBarTitleClass}>ezbudget</h2>
      </header>
    )
  }
}

Navbar.propTypes = {
  buttonType: React.PropTypes.string
};

Navbar.defaultProps = {
  buttonType: ''
};