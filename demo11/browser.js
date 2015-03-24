var React = require('react');
var App = require('./app');

React.render(React.createElement(App, {items: window.APP_PROPS.items}), document.getElementById('content'));
