This is a collection of simple demos of React.js.

These demos are purposely written in a simple and clear style. You will easily learn React.js the powerful library from these demos.

## How to use

Copy the repo into your disk.

```bash
$ git clone git@github.com:ruanyf/react-demos.git
```

Play with the source files under the repo's demo* directories.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/JSXTransformer.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/jsx">

      // ** Our code goes here! **

    </script>
  </body>
</html>
```

## Demo1: Render JSX

React.render() translates JSX into HTML.

```js
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

## Demo2: Use JavaScript in JSX

JSX takes angle brackets (beginning with &lt; ) as HTML section, curly brackets (beginning with { ) as JavaScript section.

```js
var names = ['Alice', 'Emily', 'Kate'];

React.render(
  <div>
  {
    names.map(function (name) {
      return <div>Hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
);
```

## Demo3: Use array in JSX

JSX implicitly concats all members of an array into HTML.

```js
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
React.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

## Demo4: Define a component

React.createClass() defines a component which you could use in your pages.

```js
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

React.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```

## Demo5: this.props.children

React uses `this.props.children` to access a component's children.

```js
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        this.props.children.map(function (child) {
          return <li>{child}</li>
        })
      }
      </ol>
    );
  }
});

React.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.body
);
```

## Demo6: Finding a DOM node

React uses React.findDOMNode() to find a DOM node.

```js
var MyComponent = React.createClass({
  handleClick: function() {
    React.findDOMNode(this.refs.myTextInput).focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('example')
);
```

## Demo7: this.state

React thinks of component as state machines, and uses `this.state` to hold component's state, `this.setState()` to update `this.state` and re-render the component.

```js
var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.getElementById('example')
);
```

## Demo8: Form

The `value` property of Form components, such as &lt;input$gt;, &lt;textarea$gt;, and &lt;option$gt;, is unaffected by any user input. If you wanted to update the value in response to user input, you could use the onChange event.

```js
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

React.render(<Input/>, document.body);
```

## Demo9: Component Lifecycle

Components have three main parts of their lifecycle: Mounting, Updating and Unmounting. React provides hooks into these lifecycle part. `will` methods are called right before something happens, and `did` methods which are called right after something happens.

```js
var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

React.render(
  <Hello name="world"/>,
  document.body
);
```

## Demo10: Ajax

Fetch data in componentDidMount. When the response arrives, store the data in state, triggering a render to update your UI.

```js
var UserGist = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
});

React.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.body
);
```

## Extras

### Precompiling JSX

All above demos don't use JSX compilation for clarity. In production environment, ensure to precompile JSX files before putting them online.

First, install the command-line tools.

```bash
$ npm install -g react-tools
```

Then precompile your JSX files(.jsx) into JavaScript(.js).

```bash
$ jsx -x src/ build/
```

Put the compiled JS files into HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello React!</title>
    <script src="build/react.js"></script>
    <!-- No need for JSXTransformer! -->
  </head>
  <body>
    <div id="example"></div>
    <script src="build/helloworld.js"></script>
  </body>
</html>
```

## Useful links

- [React's official site](http://facebook.github.io/react)
- [React's official examples](https://github.com/facebook/react/tree/master/examples)
- [React JS Tutorial and Guide to the Gotchas](https://zapier.com/engineering/react-js-tutorial-guide-gotchas/), by Justin Deal
- [React Primer](https://github.com/BinaryMuse/react-primer), by Binary Muse
- [jQuery versus React.js thinking](http://blog.zigomir.com/react.js/jquery/2015/01/11/jquery-versus-react-thinking.html), by zigomir

## License

BSD licensed
