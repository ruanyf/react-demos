//使用状态提升制作温度转换器
//两个input将摄氏度转换为华氏度
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}



const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        //this.setState({temperature: e.target.value});
        console.log(e.target);
        this.props.onTemprature({scale:this.props.name,temperature: e.target.value});
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.name;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.onTemprature = this.onTemprature.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    onTemprature(childValue){

        this.setState({scale:childValue.scale,temperature:childValue.temperature});
        //if(childValue.scale === 'c'){
        //    fahrenheit=tryConvert(childValue.temperature, toFahrenheit);
        //}else {
        //    celsius=tryConvert(childValue.temperature, toCelsius);
        //}
        //如果想在下面的render函数中使用本函数的变量则可以将此变量放到state中
        //状态改变了才可以触发render
    }
    render() {

        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput name="c" onTemprature={this.onTemprature} temperature={celsius}/>
                <TemperatureInput name="f" onTemprature={this.onTemprature} temperature={fahrenheit}/>
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('example')
);

//https://addons.mozilla.org/zh-CN/firefox/addon/react-devtools/