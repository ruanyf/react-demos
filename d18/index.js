//var  UserGreeting= React.createClass({
//    render:function(){
//        return <h1>Welcome back!</h1>;
//    }
//})
//
//var GuestGreeting= React.createClass({
//    render:function(){
//        return <h1>Please sign up.</h1>;
//    }
//})

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
var Greeting=React.createClass({
    render:function(){
        if (this.props.isLoggedIn) {
            return <UserGreeting />;
        }else {        return <GuestGreeting />;
        }
    }
})

//重复render会覆盖之前一个
//ReactDOM.render(
//    // Try changing to isLoggedIn={true}:
//    <Greeting isLoggedIn={false} />,
//    document.getElementById('example')
//);

var  LoginButton= React.createClass({
    render : function(){
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }
})

var LogoutButton=React.createClass({
    render : function(){
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    }
})

var LoginControl = React.createClass({
    getInitialState : function(){
        return {isLoggedIn: false};
    },
    handleLoginClick : function(){
        this.setState(function(pre){
            //得到之前的状态
            console.log(pre);
            return {isLoggedIn: true}
        });
    },
    handleLogoutClick: function(){
        //this.setState(()=>({isLoggedIn: false}));
        this.setState({isLoggedIn: false});
    },
    render:function() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        /* 可以直接使用上面的botton变量{button} 或者使用下面方法*/
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn?(<LogoutButton onClick={this.handleLogoutClick} />):(<LoginButton onClick={this.handleLoginClick} />)}
            </div>
        );
    }
});


ReactDOM.render(
    <LoginControl></LoginControl>,
    document.getElementById('example')
);