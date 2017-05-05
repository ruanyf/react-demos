//改写项目16的代码
var Clock = React.createClass({
    getInitialState : function(){
        return {date:new Date()};
    },
    tick:function(){
        this.setState({date:new Date()});
    },
    render : function(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    },
    componentDidMount : function(){
        setInterval(this.tick,1000);
    }
});

function App() {
    return (
        <div>
            /*组件复用*/
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
);