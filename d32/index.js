//function a(xx) {
//    this.b = xx;
//}
//var o = {};
//a.apply(o, [5]);
//console.log(a.b);    // undefined
//console.log(o.b);    // 5

function a(xx) {
    this.b = xx;
}
var o = {};
a.apply(null, [5]);
console.log(a.b);    // undefined
console.log(this.b);
console.log(b);
console.log(window.b);
console.log(o.b);    // undefined

var oo={};
a.apply(oo,[6]);
console.log(a.b);// undefined
console.log(this.b);//5
console.log(window.b);//5
console.log(oo.b);//6


function aa(xx, yy) {
    console.log(xx, yy);
    console.log(this);
    console.log(arguments);
}
aa.apply(null, [5, 55]);
aa.call(null, 5, 55);

var m = {
    "x" : 1
};
function foo(y) {
    console.log(this.x + y+100);
}
foo(9);//NaN
foo.apply(m, [9]);//110
foo.call(m, 9);//110
var foo1 = foo.bind(oo, 9);
foo1();//Nan
var foo2 = foo.bind(m,9);
foo2();//110
//它们的存在都是为了改变 this 的绑定
//绑定了a.bind(b,[])就可以在a中使用this指针使用b中的变量
//http://blog.csdn.net/chenleixing/article/details/44259161