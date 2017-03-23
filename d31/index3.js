var SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },
    setInterval: function(e,a) {
        console.log(e);
        console.log(a);
        console.log(arguments);
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function() {
        this.intervals.forEach(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins: [SetIntervalMixin], // Use the mixin
    getInitialState: function() {
        return {seconds: 0};
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 1000); // Call a method on the mixin
    },
    tick: function() {
        this.setState({seconds: this.state.seconds + 1});
    },
    render: function() {
        return (
            <p>
                React has been running for {this.state.seconds} seconds.
            </p>
        );
    }
});

ReactDOM.render(
    <TickTock />,
    document.getElementById('example')
);