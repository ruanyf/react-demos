class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus();
    }

    render() {
        // Use the `ref` callback to store a reference to the text input DOM
        // element in an instance field (for example, this.textInput).
        /**
         *  React.createElement("input", {
                    type: "text",
                    ref: function ref(input) {
                        _this2.textInput = input;
                    } }),


         此处有没有return 都可以????????
         ref={(input) => { this.textInput = input; }} />
         */
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { return this.textInput = input; }} />
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