//文字随着输入框变动
//var Text = React.createClass({
//    render:function(){
//        return(
//            <i>{this.props.text1?this.props.text1:"aaa"}</i>
//        )
//    }
//});

function Text(props){
        return(
            <i>{props.text1?props.text1:"aaa"}</i>
        )
}

var  Input = React.createClass({
    getDefaultProps:function(){
        return({placeholder:"请输入"})
    },
    getInitialState : function(){
        return({value1:""})
    },
    changeHandler:function(e){
        this.setState({value1:e.target.value})
    },
    render:function(){
        return(
            <div>
            <Text text1={this.state.value1}/>
            <input placeholder={this.props.placeholder} onChange={this.changeHandler}/>
            </div>
        );
    }
});


ReactDOM.render(
    <Input />,
    document.getElementById('example')
);