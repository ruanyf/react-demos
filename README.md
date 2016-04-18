This is a collection of simple demos of React.js.

These demos are purposely written in a simple and clear style. You will find no difficulty in following them to learn the powerful library.

## Related Projects

- [Flux Demo](https://github.com/ruanyf/extremely-simple-flux-demo)
- [Webpack Demos](https://github.com/ruanyf/webpack-demos)
- [React Router Tutorial](https://github.com/reactjs/react-router-tutorial)
- [React Testing Demo](https://github.com/ruanyf/react-testing-demo)
- [A boilerplate for React-Babel-Webpack project](https://github.com/ruanyf/react-babel-webpack-boilerplate)

## How to use

First copy the repo into your disk.

```bash
$ git clone git@github.com:ruanyf/react-demos.git
```

Then play with the source files under the repo's demo* directories.

## HTML Template

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">

      // ** Our code goes here! **

    </script>
  </body>
</html>
```

## Index

1. [Render JSX](#demo01-render-jsx)
1. [Use JavaScript in JSX](#demo02-use-javascript-in-jsx)
1. [Use array in JSX](#demo03-use-array-in-jsx)
1. [Define a component](#demo04-define-a-component)
1. [this.props.children](#demo05-thispropschildren)
1. [PropTypes](#demo06-proptypes)
1. [Finding a DOM node](#demo07-finding-a-dom-node)
1. [this.state](#demo08-thisstate)
1. [Form](#demo09-form)
1. [Component Lifecycle](#demo10-component-lifecycle)
1. [Ajax](#demo11-ajax)
1. [Display value from a Promise](#demo12-display-value-from-a-promise)
1. [Server-side rendering](#demo13-server-side-rendering)

---

## Demo01: Render JSX

[demo](http://ruanyf.github.io/react-demos/demo01/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo01/index.html)

The template syntax in React is called [JSX](http://facebook.github.io/react/docs/displaying-data.html#jsx-syntax). It is allowed in JSX to put HTML tags directly into JavaScript codes. `ReactDOM.render()` is the method which translates JSX into HTML, and renders it into the specified DOM node.

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

Attention, you have to use `<script type="text/babel">` to indicate JSX codes, and include `browser.min.js`, which is a [browser version](https://babeljs.io/docs/usage/browser/) of Babel and could be get inside a [babel-core@5](https://www.npmjs.com/package/babel-core) npm release, to actually perform the transformation in the browser.

Before v0.14, React use `JSTransform.js` to translate `<script type="text/jsx">`. It has been deprecated ([more info](https://facebook.github.io/react/blog/2015/06/12/deprecating-jstransform-and-react-tools.html)).

## Demo02: Use JavaScript in JSX

[demo](http://ruanyf.github.io/react-demos/demo02/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo02/index.html)

You could also use JavaScript in JSX. It takes angle brackets (&lt;) as the beginning of HTML syntax, and curly brackets (`{`) as the beginning of JavaScript syntax.

```js
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
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

## Demo03: Use array in JSX

[demo](http://ruanyf.github.io/react-demos/demo03/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo03/index.html)

If a JavaScript variable is an array, JSX will implicitly concat all members of the array.

```js
var arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

## Demo04: Define a component

[demo](http://ruanyf.github.io/react-demos/demo04/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo04/index.html)

`React.createClass()` creates a component class, which implements a render method to return an component instance of the class. You don't need to call `new` on the class in order to get an instance, just use it as a normal HTML tag.

```javascript
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```

Components would have attributes, and you can use `this.props.[attribute]` to access them, just like `this.props.name` of `<HelloMessage name="John" />` is John.

Please remember the first letter of the component's name must be capitalized, otherwise React will throw an error. For instance, `HelloMessage` as a component's name is OK, but `helloMessage` is not allowed. And a React component should only have one top child node.

```javascript
// wrong
var HelloMessage = React.createClass({
  render: function() {
    return <h1>
      Hello {this.props.name}
    </h1><p>
      some text
    </p>;
  }
});

// correct
var HelloMessage = React.createClass({
  render: function() {
    return <div>
      <h1>Hello {this.props.name}</h1>
      <p>some text</p>
    </div>;
  }
});
```

## Demo05: this.props.children

[demo](http://ruanyf.github.io/react-demos/demo05/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo05/index.html)

React uses `this.props.children` to access a component's children nodes.

```javascript
var NotesList = React.createClass({
  render: function() {
    return (
      <ol>
      {
        React.Children.map(this.props.children, function (child) {
          return <li>{child}</li>;
        })
      }
      </ol>
    );
  }
});

ReactDOM.render(
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>,
  document.getElementById('example')
);
```

Please be mindful that the value of `this.props.children` has three possibilities. If the component has no children node, the value is `undefined`; If single children node, an object; If multiple children nodes, an array. You should be careful to handle it.

React gave us an utility [`React.Children`](https://facebook.github.io/react/docs/top-level-api.html#react.children) for dealing with the `this.props.children`'s opaque data structure. You could use `React.Children.map` to iterate `this.props.children` without worring its data type being `undefined` or `object`. Check [official document](https://facebook.github.io/react/docs/top-level-api.html#react.children) for more methods `React.Children` offers.

## Demo06: PropTypes

[demo](http://ruanyf.github.io/react-demos/demo06/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo06/index.html)

Components have many specific attributes which are called ”props” in React and can be of any type.

Sometimes you need a way to validate these props. You don't want users have the freedom to input anything into your components.

React has a solution for this and it's called PropTypes.

```javascript
var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});
```

The above component of `MyTitle` has a props of `title`. PropTypes tells React that the title is required and its value should be a string.

Now we give `Title` a number value.

```javascript
var data = 123;

ReactDOM.render(
  <MyTitle title={data} />,
  document.getElementById('example')
);
```

It means the props doesn't pass the validation, and the console will show you an error message.

```bash
Warning: Failed propType: Invalid prop `title` of type `number` supplied to `MyTitle`, expected `string`.
```

Visit [official doc](http://facebook.github.io/react/docs/reusable-components.html) for more PropTypes options.

P.S. If you want to give the props a default value, use `getDefaultProps()`.

```javascript
var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.getElementById('example')
);
```

## Demo07: Finding a DOM node

[demo](http://ruanyf.github.io/react-demos/demo07/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo07/index.html)

Sometimes you need to reference a DOM node in a component. React gives you the `ref` attribute to find it.

```js
var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
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

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
```

The desired DOM node should have a `ref` attribute, and `this.refs.[refName]` would return the corresponding DOM node. Please be mindful that you could do that only after this component has been mounted into the DOM, otherwise you get `null`.

## Demo08: this.state

[demo](http://ruanyf.github.io/react-demos/demo08/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo08/index.html)

React thinks of component as state machines, and uses `this.state` to hold component's state, `getInitialState()` to initialize `this.state`(invoked before a component is mounted), `this.setState()` to update `this.state` and re-render the component.

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

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);
```

You could use component attributes to register event handlers, just like `onClick`, `onKeyDown`, `onCopy`, etc. Official Document has all [supported events](http://facebook.github.io/react/docs/events.html#supported-events).

## Demo09: Form

[demo](http://ruanyf.github.io/react-demos/demo09/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo09/index.html)

According to React's design philosophy, `this.state` describes the state of component and is mutated via user interactions, and `this.props` describes the properties of component and is stable and immutable.

Since that, the `value` attribute of Form components, such as &lt;input&gt;, &lt;textarea&gt;, and &lt;option&gt;, is unaffected by any user input. If you wanted to access or update the value in response to user input, you could use the onChange event.

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

ReactDOM.render(<Input/>, document.getElementById('example'));
```

More information on [official document](http://facebook.github.io/react/docs/forms.html).

## Demo10: Component Lifecycle

[demo](http://ruanyf.github.io/react-demos/demo10/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo10/index.html)

Components have three main parts of [their lifecycle](https://facebook.github.io/react/docs/working-with-the-browser.html#component-lifecycle): Mounting(being inserted into the DOM), Updating(being re-rendered) and Unmounting(being removed from the DOM). React provides hooks into these lifecycle part. `will` methods are called right before something happens, and `did` methods which are called right after something happens.

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

ReactDOM.render(
  <Hello name="world"/>,
  document.getElementById('example')
);
```

The following is [a whole list of lifecycle methods](http://facebook.github.io/react/docs/component-specs.html#lifecycle-methods).

- **componentWillMount()**: Fired once, before initial rendering occurs. Good place to wire-up message listeners. `this.setState` doesn't work here.
- **componentDidMount()**: Fired once, after initial rendering occurs. Can use `this.getDOMNode()`.
- **componentWillUpdate(object nextProps, object nextState)**: Fired after the component's updates are made to the DOM. Can use `this.getDOMNode()` for updates.
- **componentDidUpdate(object prevProps, object prevState)**: Invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated.
- **componentWillUnmount()**: Fired immediately before a component is unmounted from the DOM. Good place to remove message listeners or general clean up.
- **componentWillReceiveProps(object nextProps)**: Fired when a component is receiving new props. You might want to `this.setState` depending on the props.
- **shouldComponentUpdate(object nextProps, object nextState)**: Fired before rendering when new props or state are received. `return false` if you know an update isn't needed.

## Demo11: Ajax

[demo](http://ruanyf.github.io/react-demos/demo11/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo11/index.html)

How to get the data of a component from a server or an API provider? The answer is using Ajax to fetch data in the event handler of `componentDidMount`. When the server response arrives, store the data with `this.setState()` to trigger a re-render of your UI.

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

ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('example')
);
```

## Demo12: Display value from a Promise

[demo](http://ruanyf.github.io/react-demos/demo12/) / [source](https://github.com/ruanyf/react-demos/blob/master/demo12/index.html)

This demo is inspired by Nat Pryce's article ["Higher Order React Components"](http://natpryce.com/articles/000814.html).

If a React component's data is received asynchronously, we can use a Promise object as the component's property also, just as the following.

```javascript
ReactDOM.render(
  <RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />,
  document.getElementById('example')
);
```

The above code takes data from Github's API, and the `RepoList` component gets a Promise object as its property.

Now, while the promise is pending, the component displays a loading indicator. When the promise is resolved successfully, the component displays a list of repository information. If the promise is rejected, the component displays an error message.

```javascript
var RepoList = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, data: null};
  },

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },

  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});
```

## Demo13: Server-side rendering

[source](https://github.com/ruanyf/react-demos/tree/master/demo13/src)

This demo is copied from [github.com/mhart/react-server-example](https://github.com/mhart/react-server-example), but I rewrote it with JSX syntax.

```bash
# install the dependencies in demo13 directory
$ npm install

# translate all jsx file in src subdirectory to js file
$ npm run build

# launch http server
$ node server.js
```

## Extras

### Precompiling JSX

All above demos don't use JSX compilation for clarity. In production environment, ensure to precompile JSX files before putting them online.

First, install the command-line tools [Babel](https://babeljs.io/docs/usage/cli/).

```bash
$ npm install -g babel
```

Then precompile your JSX files(.jsx) into JavaScript(.js). Compiling the entire src directory and output it to the build directory, you may use the option `--out-dir` or `-d`.

```bash
$ babel src --out-dir build
```

Put the compiled JS files into HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello React!</title>
    <script src="build/react.js"></script>
    <script src="build/react-dom.js"></script>
    <!-- No need for Browser.js! -->
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
- [React (Virtual) DOM Terminology](http://facebook.github.io/react/docs/glossary.html), by Sebastian Markbåge
- [The React Quick Start Guide](http://www.jackcallister.com/2015/01/05/the-react-quick-start-guide.html), by Jack Callister
- [Learning React.js: Getting Started and Concepts](https://scotch.io/tutorials/learning-react-getting-started-and-concepts), by Ken Wheeler
- [Getting started with React](http://ryanclark.me/getting-started-with-react/), by Ryan Clark
- [React JS Tutorial and Guide to the Gotchas](https://zapier.com/engineering/react-js-tutorial-guide-gotchas/), by Justin Deal
- [React Primer](https://github.com/BinaryMuse/react-primer), by Binary Muse
- [jQuery versus React.js thinking](http://blog.zigomir.com/react.js/jquery/2015/01/11/jquery-versus-react-thinking.html), by zigomir

## License

BSD licensed
