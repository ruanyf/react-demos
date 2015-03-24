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

## Render JSX

React.render() translates JSX into HTML.

```js
React.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

## Use JavaScript in JSX

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

## Use array in JSX

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

## Define a component

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

## this.props.children

we use `this.props.children` to access a component's children.

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

## Extras

### Precompiling JSX

Install the command-line tools.

```bash
$ npm install -g react-tools
```

Precompile your JSX files(.jsx) into JavaScript(.js).

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

- [React's Official site](http://facebook.github.io/react)

## License

BSD licensed
