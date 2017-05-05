var Input=React.createClass({
    render:function(){
        return <input type="text"/>
    },
    componentDidMount:function(){
        //todo 如何手动触发focus
        this.props.focus?this.focus():"";
    }
});

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
        this.state = {focus: false};
    }

    focus() {
        this.setState({focus:true});
    }

    render() {
        return (
            <div>
                <Input focus={this.state.focus}/>
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focus}
                />
            </div>
        );
    }
}
ReactDOM.render(
    <CustomTextInput />,
    document.getElementById('example')
);