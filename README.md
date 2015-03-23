This is a collection of simple demos of React.js.

These demos are purposely written in a simple and clear style. You will easily learn how to use this powerful library from these demos.

## Links

- [Official website](http://facebook.github.io/react)

## Examples

We have several examples [on the website](http://facebook.github.io/react/). Here is the first one to get you started:

```js
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
```

This example will render "Hello John" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](http://facebook.github.io/react/docs/jsx-in-depth.html). JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

## Installation

The fastest way to get started is to serve JavaScript from the CDN (also available on [cdnjs](https://cdnjs.com/libraries/react) and [jsdelivr](http://www.jsdelivr.com/#!react)):

```html
<!-- The core React library -->
<script src="http://fb.me/react-0.13.1.js"></script>
<!-- In-browser JSX transformer, remove when pre-compiling JSX. -->
<script src="http://fb.me/JSXTransformer-0.13.1.js"></script>
```

We've also built a [starter kit](http://facebook.github.io/react/downloads/react-0.13.1.zip) which might be useful if this is your first time using React. It includes a webpage with an example of using React with live code.

If you'd like to use [bower](http://bower.io), it's as easy as:

```sh
bower install --save react
```

## License

BSD licensed
