var App = React.createClass({
    handleChange: function(event) {
        var index = event.target.value;
        if(index >= 1 && index <= 10) {
            //找到对应的输入框并将焦点设置到里面
            var refName = "input" + index;
            //var inputDOM = React.findDOMNode(this.refs[refName]);
            var inputDOM = this.refs[refName];
            inputDOM.focus();
        }
    },
    render: function() {
        var inputs = [];
        for(var i = 1; i <= 10; i++) {
            //key的定义一定是在最外层
            //React.createElement("input", { type: "text", ref: "input" + i })
            inputs.push(<div key={i}><li><input type="text" ref={"input" + i} /></li><br/></div>);
        }
        //Since for is a reserved word in JavaScript, React elements use htmlFor instead.
        return (
            <div>
                <label htmlFor="input" >在这里输入下面任意输入框的索引，光标会自动定位到输入框内：</label>
                <input type="text" id="input" onChange={this.handleChange} />
                <hr />
                <ol>
                    {inputs}
                </ol>
            </div>
        )
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('example')
);