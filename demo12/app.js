'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      items: this.props.items,
      disabled: true
    };
  },

  componentDidMount: function componentDidMount() {
    this.setState({
      disabled: false
    });
  },

  handleClick: function handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleClick, disabled: this.state.disabled },
        'Add Item'
      ),
      React.createElement(
        'ul',
        null,
        this.state.items.map(function (item) {
          return React.createElement(
            'li',
            null,
            item
          );
        })
      )
    );
  }
});