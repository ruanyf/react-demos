//shouldComponentUpdate用法
class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }
//当components的重新渲染的逻辑确定的时候，可以使用下面方法确保只有在下面条件成立的条件下才去重新渲染dom节点
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
            console.log("this.props.color"+this.props.color);
            console.log("nextProps.color"+nextProps.color);
            return true;
        }
        if (this.state.count !== nextState.count) {
            console.log("this.state.count"+this.state.count);
            console.log("nextState.count"+nextState.count);
            return true;
        }
        return false;
    }

    render() {
        console.log("render..");
        return (
            <button
                style={{color:this.props.color}}
                onClick={() => this.setState(state => ({count: state.count + 1}))}>
                Count: {this.state.count}
            </button>
        );
    }
}
ReactDOM.render(
    <CounterButton color="red"/>,
    document.getElementById('example')
);