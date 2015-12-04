import React from 'react';

export default class Keypad extends React.Component {
  render() {
    const options = this.props.options.map((option, key) => {
      return (
        <li
          className='transaction-numbers__list-item'
          key={key}
          onClick={this.props.onClick.bind(null, option)}>
          {option}
        </li>
      )
    });

    return (
      <ul className='transaction-numbers__list'>
        {options}
      </ul>
    );
  }
}

Keypad.propTypes = {
  options: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired
};