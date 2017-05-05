//function tick() {
//    //div等模块变量需要使用const React elements are immutable.
//    const element = (
//        <div>
//            <h1>Hello, world!</h1>
//            <h2>It is {new Date().toLocaleTimeString()}.</h2>
//        </div>
//    );
//    ReactDOM.render(
//        element,
//        document.getElementById('example')
//    );
//}
//setInterval(tick, 1000);

var TickDiv = React.createClass({
    render: function () {
        return (     <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>);
    }
});

function a(){
    return (     <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>);
}

//setInterval(a,1000);
setInterval(TickDiv.render,1000);

    ReactDOM.render(
        <TickDiv></TickDiv>,
        document.getElementById('example')
    );