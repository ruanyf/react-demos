//加上状态的传递等效果
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
var Input = React.createClass({
    render: function () {
        return (
            <input type="text" placeholder="please input ..." onChange={this.props.filterText}/>
        )
    }
});
//子元素最好不要写除了render以外的代码

var CheckBox = React.createClass({
    handlerChange: function (e) {
        console.log(e.target);
        this.props.onHandleChange(e.target.checked);
    },
    render: function () {
        return (
            <p><input type="checkbox" onChange={this.handlerChange}
                      checked={this.props.checked}/> Only show products in
                stock</p>
        )
    }
});

var ProductCategoryRow = React.createClass({
    render() {
        return <tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>;
    }
});

var ProductRow = React.createClass({
    render() {
        var filterText = this.props.filterText;
        var idx = this.props.product.name.indexOf(filterText);
        if(idx === -1){
            return <tr></tr>;
        }
        if(this.props.inStockOnly){
            return this.props.product.stocked ? <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr> : <tr></tr>;
            //不能返回""
            //必须返回一个div之类的元素
        }else {
            return this.props.product.stocked ? <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr> : <tr>
                <td><span style={{color:'red'}}>{this.props.product.name}</span></td>
                <td>{this.props.product.price}</td>
            </tr>;
        }
    }
});

var Table = React.createClass({
    //{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    render: function () {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach((p)=> {
            if (p.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={p.category} key={p.category}/>);
            }
            rows.push(<ProductRow product={p} key={p.name} inStockOnly={this.props.inStockOnly} filterText={this.props.filterText}/>);
            lastCategory = p.category;
        });


        return (

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var FilterTable = React.createClass({
    getInitialState: function () {
        return ({checked: true,filterText:""});
    },
    onHandleChange: function (e) {
        console.log(e);
        this.setState({checked: e});
    },
    filterText:function(e){
        this.setState({filterText: e.target.value});
    },
    render: function () {
        const myDate = {products:this.props.products,inStockOnly:this.state.checked,filterText:this.state.filterText};
        //<Table products={this.props.products} inStockOnly={this.state.checked} filterText={this.state.filterText}/>
        return (
            <div>
                <Input filterText={this.filterText}/>
                <CheckBox onHandleChange={this.onHandleChange} checked={this.state.checked}/>
                <Table {...myDate}/>
            </div>
        );
    }
});

//类型检测
FilterTable.propTypes = {
    products: React.PropTypes.array
};

ReactDOM.render(
    <FilterTable products={PRODUCTS}/>,
    document.getElementById('example')
);