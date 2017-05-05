//受控制的组件

var Input = React.createClass({

    handleChange:function(e){
        this.props.handleChange(e);
    },
    render:function(){
        console.log("render Input");
        return <input type="text" value={this.props.value} onChange={this.handleChange} />;
    }
});

//render的时候会render父类的所有子类
//无法直接render子类
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.a=1;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        //this.setState({value: event.target.value});
        this.a = event.target.value;
        console.log(this.a);

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <Input handleChange={this.handleChange} value={this.a}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('example')
);