import React from 'react';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);

    const {items} = this.props

    this.state = {
      items,
      disabled: true
    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {

    const { items } = {...this.state }

    this.setState({
      items: items.concat('Item ' + items.length)
    })
  }

  render() {

    const { disabled, items } = { ...this.state }

    return (
      <div>
        <button onClick={this.handleClick.bind(this)} disabled={disabled}>Add Item</button>
        <ul>
        {
          items.map(function(item, index) {
            return <li key={index}>{item}</li>
          })
        }
        </ul>
      </div>
    )
  }
};
