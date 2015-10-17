'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

_reactDom2['default'].render(_react2['default'].createElement(_app2['default'], { items: window.APP_PROPS.items }), document.getElementById('content'));