import React from 'react';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);

    const items = this.props.items

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

    const items = Object.assign({},this.state ).items

    this.setState({
      items: items.concat('Item ' + items.length)
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
