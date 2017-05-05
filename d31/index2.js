//todo  引用PureComponent出现问题
var PureRenderMixin = require('react-addons-pure-render-mixin');
var  ListOfWords=React.createClass({
    mixins:[PureRenderMixin],
    render:function(){
        console.log("render child");
        return <div>{this.props.words.join(',')}</div>;
    }
});

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This section is bad style and causes a bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({words: words});
    }

    /**
     * handleClick() {
  this.setState(prevState => ({
    words: prevState.words.concat(['marklar'])
  }));
}
     正确写法
     或者、
     var words = this.state.words;
     words = words.concat('marklar');
     * @returns {XML}
     */


    render() {
        console.log("render parent");

        return (
            <div>
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

ReactDOM.render(
    <WordAdder />,
    document.getElementById('example')
);