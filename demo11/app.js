var React = require('react');

module.exports = React.createClass({displayName: "exports",

  getInitialState: function() {
    return {
      items: this.props.items,
      disabled: true
    }
  },

  componentDidMount: function() {
    this.setState({
      disabled: false
    })
  },

  handleClick: function() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.handleClick, disabled: this.state.disabled}, "Add Item"), 
        React.createElement("ul", null, 
        
          this.state.items.map(function(item) {
            return React.createElement("li", null, item)
          })
        
        )
      )
    )
  },
});
