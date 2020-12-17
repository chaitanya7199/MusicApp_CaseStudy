import React, { Component } from 'react'
import UserService from '../services/UserService';

class UserRegistrationComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: '',
            userName: '',
            userPassword: ''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    // step 3
    /*
    componentDidMount(){

        // step 4
        if(this.state.songId === '_add'){
            return
        }else{
            SongService.getSongById(this.state.songId).then( (res) =>{
                let song = res.data;
                this.setState({songTitle: song.songTitle,
                    singer: song.singer,
                    albumName : song.albumName,
                    url: song.url
                });
            });
        }        
    }
    */
    registerUser = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId, userName: this.state.userName, userPassword: this.state.userPassword };
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then(res => {
            this.props.history.push('/user-login')
        })
        /*
        // step 5
        if(this.state.songId === '_add'){
            SongService.createSong(song).then(res =>{
                this.props.history.push('/songs');
            });
        }else{
            SongService.updateSong(song, this.state.songId).then( res => {
                this.props.history.push('/songs');
            });
        }
        */
    }

    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changeUserPasswordHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    reset() {
        this.props.history.push('/user-registration');
    }


    /*getTitle(){
        if(this.state.songId === '_add'){
            return <h3 className="text-center">Add Song</h3>
        }else{
            return <h3 className="text-center">Update Song</h3>
        }
    }*/
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 text-white bg-dark mb-3">
                            &nbsp;&nbsp;
                            <h3 className="text-center">User Registration</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> User Id: </label>
                                        <input placeholder="Enter User Id" name="userId" className="form-control"
                                            value={this.state.userId} onChange={this.changeUserIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> User Name: </label>
                                        <input placeholder="Enter User Name" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> User Password: </label>
                                        <input placeholder="Enter User Password" name="userPassword" className="form-control"
                                            value={this.state.userPassword} onChange={this.changeUserPasswordHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.registerUser}>Register</button>
                                    <button className="btn btn-warning" onClick={this.reset.bind(this)} style={{ marginLeft: "10px" }}>Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserRegistrationComponent