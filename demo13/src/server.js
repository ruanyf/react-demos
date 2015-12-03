var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    ReactDOMServer = require('react-dom/server');

var App = require('./app');

http.createServer(function(req, res) {
  if (req.url == '/') {
    res.setHeader('Content-Type', 'text/html');
    var props = {
      items: [
        'Item 0',
        'Item 1'
      ]
    };
    var html = ReactDOMServer.renderToStaticMarkup(
      <body>
        <div id="content" dangerouslySetInnerHTML={{__html:
          ReactDOMServer.renderToString(<App items={props.items}/>)
        }} />

        <script dangerouslySetInnerHTML={{__html:
        'var APP_PROPS = ' + JSON.stringify(props) + ';'
        }}/>
        <script src="//fb.me/react-0.14.0.min.js"/>
        <script src="//fb.me/react-dom-0.14.0.min.js"/>
        <script src="/bundle.js"/>
      </body>
    );
    res.end(html);

  } else if (req.url == '/bundle.js') {
    res.setHeader('Content-Type', 'text/javascript');
    browserify()
      .add('./browser.js')
      .transform(literalify.configure({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
      }))
      .bundle()
      .pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(3000, function(err) {
  if (err) throw err;
  console.log('Listening on 3000...');
})

