/**
 * Children passed to a custom component can be anything, as long as that component transforms them into something React can understand before rendering.
 * @param props
 * @returns {XML}
 * @constructor
 */
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

ReactDOM.render(
    <ListOfTenThings />,
    document.getElementById('example')
);