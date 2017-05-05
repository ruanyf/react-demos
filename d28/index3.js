class Input extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <input type="text"  ref={(input) => { this.props.callback(input); }}/>
    }
};

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
        this.state = {focus: false};
    }
    focus() {
        this.setState({focus: true});
    }
    callback(input){
        console.log(this.state.focus);
        this.state.focus && input.focus();
    }


    render() {
        return (
            <div>
                <Input callback={this.callback} focus={this.state.focus}/>
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