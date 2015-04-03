var SideBar = React.createClass({
    //this.props.data
    //this.props.userClick
    render: function() {
        var me = this;
        var styles = {
            size: {
                width: 200,
                height: 400,
                border: "2px #666 solid",
                textAlign: "center",
                boxSizing: "border-box",
                float: "left"
            },
            title: {
                fontSize: "1.3em",
                marginBottom: 40,
            },
        };
        var playlists = this.props.data.map(function(list) {
            return (
                <Playlist  
                    playlistname={list.playlistname} 
                    userClick={me.props.userClick} 
                    index={list.index}
                />
            );
        });
        return (
            <div style={styles.size}>
                <h1 style={styles.title}>My Playlists</h1>
                {playlists}
            </div>
        );
    }
});

var Playlist = React.createClass({
    //this.props.userClick
    //this.props.playlistname
    //this.props.index
    getInitialState: function() {
		return {
			style: {
                width: 150,
                height: 20,
                border: "2px #666 solid",
                borderRadius: 10,
                margin: "20px auto",
                cursor: "pointer",

            }
		};
	},
    handleClick: function() {
        this.props.userClick(this.props.index);
    },
    
    render: function() {
        
        var styles = {
           width: 150,
           height: 20,
           border: "2px #666 solid",
           borderRadius: 10,
           margin: "20px auto",
           cursor: "pointer",
           
        }
        return (
            <div style={styles} onClick={this.handleClick}>
                {this.props.playlistname}
            </div>
        );
    }
});

var data = [
    {
        "playlistname" : "Eminem", 
        "data": [
            {"song": "Space Bound", "artist": "Eminem", "length": "4:39", "action": "remove"},
            {"song": "When I'm gone", "artist": "Eminem", "length": "4:41", "action": "remove"},
            {"song": "We Make You", "artist": "Eminem", "length": "4:30", "action": "remove"},
            {"song": "Love the way you lie", "artist": "Eminem", "length": "4:23", "action": "remove"}
        ],
        "tracks": 4,
        "index": 0
    },
    {
        "playlistname" : "Bruno Mars", 
        "data": [
            {"song": "Talking to the moon", "artist": "Bruno Mars", "length": "3:38", "action": "remove"},
            {"song": "Marry you", "artist": "Bruno Mars", "length": "3:50", "action": "remove"},
            {"song": "Just the way you are", "artist": "Bruno Mars", "length": "3:40", "action": "remove"}
        ],
        "tracks": 3,
        "index": 1
    },
    {
        "playlistname" : "Michael Jackson", 
        "data": [
            {"song": "Beat it", "artist": "Michael Jackson", "length": "4:19", "action": "remove"},
            {"song": "Billie Jean", "artist": "Michael Jackson", "length": "4:54", "action": "remove"},
            {"song": "Black ot white", "artist": "Michael Jackson", "length": "4:15", "action": "remove"},
            {"song": "Man in the mirror", "artist": "Michael Jackson", "length": "5:18", "action": "remove"},
            {"song": "Smooth Criminal", "artist": "Michael Jackson", "length": "4:17", "action": "remove"},
            {"song": "Speehless", "artist": "Michael Jackson", "length": "3:21", "action": "remove"}
        ],
        "tracks": 6,
        "index": 2
    }
]

var Main = React.createClass({
    //this.props.playlist
    getInitialState: function() {
		return {
			filterTextInput: ''
		};
	},
    handleUserInput: function(filterTextInput) {
        this.setState({
            filterTextInput: filterTextInput
        });
    },
    render: function() {
        var styles = {
            size: {
                width: 500,
                height: 400,
                float: "left",
                margin: "0 0 0 20px"
            },
            listname: {
                width: 300,
                margin: 5,
                height: 27,
                padding: 0,
                display: "inline-block"
            },
        }
        return (
            <div style={styles.size}>
                <h3 style={styles.listname}>{this.props.playlist.playlistname}</h3>
                <Tracks tracks={this.props.playlist.tracks} />
                <SearchBar onUserInput={this.handleUserInput} />
                <Section data={this.props.playlist.data} filterTextInput={this.state.filterTextInput} />
                <ActionBtn text="Add New Song" float="left" />
                <ActionBtn text="Delete Playlist" float="right" />
            </div>
        );
    }
});

var SearchBar = React.createClass({
    //this.props.onUserInput
    handleChange: function() {
        this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value)
    },
    render: function() {
        var styles = {
            background: '#EEE',
            margin: 5,
            border: "2px #666 solid",
            height: 18,
            outline: "none",
            padding: 1
        }
        return (
            <form>
                <input style={styles} 
                    placeholder="Search..." 
                    ref="filterTextInput" 
                    onChange={this.handleChange}
                />
            </form>
        );
    }
});

var ActionBtn = React.createClass({
    render: function() {
        var float = this.props.float
        var styles = {
            background: '#EEE',
            margin: "5px 10px 0 5px",
            border: "2px #666 solid",
            height: 28,
            outline: "none",
            fontWeight: "bold",
            color: "#666",
            cursor: "pointer",
            float: float
        }
        return (
            <button style={styles}>{this.props.text}</button>
        );
    }
});

var Tracks = React.createClass({
    //this.props.tracks
    render: function() {
        var styles = {
            tracks: {
                float: "right",
                width: 90,
                margin: "25px 0 0 0",
                fontWeight: "bold"
            }
        }
        return (
            <span style={styles.tracks}>Tracks: {this.props.tracks}</span>
        )  
    }
});

var Section = React.createClass({
    //this.props.data
    //this.props.filterTextInput
    render: function() {
        var styles = {
            size: {
                width: "calc(100% - 14px)",
                maxHeight: 275,
                margin: "10px 5px 5px 5px",
                border: "2px #666 solid",
                padding: 0,
                borderCollapse: "collapse"
            },
            theadTd: {
                borderRight: "2px #666 solid",
                borderBottom: "2px #666 solid",
                margin: 0,
                padding: 2
            },
            tbodyTd: {
                padding: 2
            },
            tbodyTr: {
                height: 50
            }
        }
        var filterTextInput = this.props.filterTextInput;
        var datalist = this.props.data.map(function(list) {
            if(list.song.toLowerCase().indexOf(filterTextInput.toLowerCase()) !== -1) {
                return (
                    <tr style={styles.tbodyTr}>
                        <td style={styles.tbodyTd}>{list.song}</td>
                        <td style={styles.tbodyTd}>{list.artist}</td>
                        <td style={styles.tbodyTd}>{list.length}</td>
                        <td style={styles.tbodyTd}>{list.action}</td>
                    </tr>
                );
            }
        });
        return (
            <table style={styles.size}>
                <thead>
                    <tr>
                        <td style={styles.theadTd}>Song</td>
                        <td style={styles.theadTd}>Artist</td>
                        <td style={styles.theadTd}>Length</td>
                        <td style={styles.theadTd}>Action</td>
                    </tr>
                </thead>
                <tbody>
                        {datalist}
                </tbody>
            </table>
        );
    }
});
        
var Container = React.createClass({
    getInitialState: function() {
		return {
			playlist: this.props.data[0]
		};
	},
    handleUserClick: function(index) {
        this.setState({
            playlist: this.props.data[index]
        });
    },
    render: function() {
        return (
            <div>
                <SideBar 
                    data={this.props.data} 
                    userClick={this.handleUserClick}
                />
                <Main 
                    playlist={this.state.playlist }
                />
            </div>
        );
    }
});

React.render(
    <Container data={data} />,
    document.getElementById("content")
);