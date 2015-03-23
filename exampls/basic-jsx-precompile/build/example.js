var ExampleApplication = React.createClass({displayName: "ExampleApplication",
  render: function() {
    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message =
      'React has been successfully running for ' + seconds + ' seconds.';

    return React.createElement("p", null, message);
  }
});

var start = new Date().getTime();

setInterval(function() {
  React.render(
    React.createElement(ExampleApplication, {elapsed: new Date().getTime() - start}),
    document.getElementById('container')
  );
}, 50);
