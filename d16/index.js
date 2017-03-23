class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log("child componentDidMount");
        this.timerID = setInterval(
            /**
             * (x) => x + 6

             相当于

             function(x){
             return x + 6;
            }
             */
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount*********");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
        this.props.changeParenState();
    }

    componentDidUpdate(){
        console.log("child componentDidUpdate......");
    }

    render() {
        console.log("child render...");
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

var ClockParent = React.createClass({
    getInitialState: function() {
        return {count: 1};
    },
    componentDidMount:function(){
        console.log("parent componentDidMount");
    },
    componentWillUnmount:function() {
        console.log("parent componentWillUnmount*********");
    },
    componentDidUpdate(){
        console.log("parent componentDidUpdate......");
    },
    changeParenState:function(){
        console.log("changeParenState");
        this.setState({count:2});
    },
    render:function(){
        console.log("parent render");
        return <div>
            {this.state.count ==1 ?<Clock count={this.state.count} changeParenState={this.changeParenState}/>:""}
        </div>
    }
})
//todo 修改父div也会导致子组件remount


/**
 * Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from <a> to <img>, or from <Article> to <Comment>, or from <Button> to <div> - any of those will lead to a full rebuild.

 When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive componentWillMount() and then componentDidMount(). Any state associated with the old tree is lost.

 Any components below the root will also get unmounted and have their state destroyed. For example, when diffing:

 <div>
 <Counter />
 </div>

 <span>
 <Counter />
 </span>
 This will destroy the old Counter and remount a new one.
 */

//function App() {
//    return (
//        <div>
//            <Clock />
//        </div>
//    );
//}

ReactDOM.render(
    <ClockParent />,
    document.getElementById('example')
);