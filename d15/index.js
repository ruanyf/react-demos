//函数即组件
//组件名字必须大写
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

function Search(){
    return(<div class="col-width">
        <button class="btn btn-primary applic_btn J_search">查询
        </button>
        <App />
    </div>);
}

ReactDOM.render(
    <Search />,
    document.getElementById('example')
);