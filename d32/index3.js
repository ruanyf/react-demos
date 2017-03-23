var adder = {
    base : 1,

    add : function(a) {
        var f = v => v + this.base;
        return f(a);
    },

    addThruCall: function(a) {
        var f = v => v + this.base;
        var b = {
            base : 2
        };

        console.log(f.call(b, 1));
        return f.call(b, a);
    }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3 ——译者注）
//是不是平级的时候不会绑定this??????

var arguments = 42;
var arr = () => arguments;

console.log(arr()); // 42

function foo() {
    var f = () => arguments[0]; // foo's implicit arguments binding
    return f(2);
}

console.log(foo(100)); // 1