var React = require('react');

module.exports = React.createClass({

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
      <div>
        <button onClick={this.handleClick} disabled={this.state.disabled}>Add Item</button>
        <ul>
        {
          this.state.items.map(function(item) {
            return <li>{item}</li>
          })
        }
        </ul>
      </div>
    )
  },
});
