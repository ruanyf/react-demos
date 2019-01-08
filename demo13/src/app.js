import React from 'react';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.state = {
      items: this.props.items,
      disabled: true
    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</button>
        <ul>
        {
          this.state.items.map(function(item, index) {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
      </div>
    )
  }
};
