//function Person() {
//    var self = this; // 也有人选择使用 `that` 而非 `self`.
//                     // 只要保证一致就好.
//    self.age = 0;
//
//    setInterval(function growUp() {
//        // 回调里面的 `self` 变量就指向了期望的那个对象了
//        self.age++;
//        console.log(self.age);
//    }, 1000);
//}


function Person2(){
    //此处的this都是指向全局对象
    console.log(this);
    this.age = 0;

    setInterval(() => {
        console.log(this);
        this.age++; // |this| 正确地指向了 person 对象
        console.log(this.age);
    }, 1000);
}

//function Person3() {
//    console.log(this);
//    this.age = 0;
//
//    setInterval(function growUp() {
//        console.log(this);
//        // 回调里面的 `self` 变量就指向了期望的那个对象了
//        this.age++;
//        console.log(this.age);
//    }.bind(this), 1000);
//}
//Person();
var p = Person2();
p;
//Person3();
//var p = new Person3();
//p;