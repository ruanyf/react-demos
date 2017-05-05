//显示布局
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
            <input type="text" placeholder="please input ..."/>
        )
    }
});

var CheckBox = React.createClass({
    handlerChange: function (e) {
        this.props.onHandleChange(e.target.value);
    },
    render: function () {
        return (
            <p><input type="checkbox" onChange={this.handlerChange}></input> Only show products in
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
        return this.props.product.stocked?<tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.price}</td>
        </tr>:<tr>
            <td><span style={{color:'red'}}>{this.props.product.name}</span></td>
            <td>{this.props.product.price}</td>
        </tr>;
    }
});

var Table = React.createClass({
    onHandleChange: function () {

    },
    //{category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    render: function () {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach((p)=> {
            console.log(p);
            if (p.category !== lastCategory){
                rows.push(<ProductCategoryRow category={p.category} key={p.category}/>);
            }
            rows.push(<ProductRow product={p} key={p.name}/>);
            lastCategory = p.category;
        });

        console.log(rows);

        return (
            <div>
                <Input/>
                <CheckBox onHandleChange={this.onHandleChange}/>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
});

ReactDOM.render(
    <Table products={PRODUCTS}/>,
    document.getElementById('example')
);