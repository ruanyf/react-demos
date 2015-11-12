import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App items={window.APP_PROPS.items} />, document.getElementById('content'));
