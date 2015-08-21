var React = require('react');
var App = require('./app');

React.render(<App items={window.APP_PROPS.items} />, document.getElementById('content'));
