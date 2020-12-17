import React, { Component } from 'react'
import UserService from '../services/UserService';

class UserLoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: '',
            userPassword: '',
            loginStatus: true,
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser = (e) => {
        e.preventDefault();
        let user = { userId: this.state.userId, userPassword: this.state.userPassword };
        console.log('user => ' + JSON.stringify(user));

        UserService.checkDetails(user.userId, user.userPassword).then(res => {
            if (res.data === "Login Successful") {
                UserService.getUser(user.userId).then(res => {
                    localStorage.setItem("users", JSON.stringify({ userId: this.state.userId, userName: res.data.userName }))
                    this.props.history.push(`/search-songs/${user.userId}`)
                })
                console.log(res.data)
            }
            else {
                this.setState({ loginStatus: false, userId: '', userPassword: '' })
                console.log(res.data)
                //this.props.history.push('/user-login')
            }
            //this.props.history.push('/user-login')
        })

    }

    changeUserIdHandler = (event) => {
        this.setState({ userId: event.target.value });
    }

    changeUserPasswordHandler = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    reset() {
        this.setState({ userId: '', userPassword: '' })
        //this.props.history.push('/user-login');
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 text-white bg-dark mb-3">
                            &nbsp;&nbsp;
                            <h3 className="text-center">User Login</h3>
                            <div className="card-body" data-test="cardContent">
                                <form>
                                    <div className="form-group">
                                        <label> User Id: </label>
                                        <input placeholder="Enter User Id" name="userId" className="form-control"
                                            value={this.state.userId} onChange={this.changeUserIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> User Password: </label>
                                        <input type="password" placeholder="Enter User Password" name="userPassword" className="form-control"
                                            value={this.state.userPassword} onChange={this.changeUserPasswordHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                    <button className="btn btn-warning" onClick={this.reset.bind(this)} style={{ marginLeft: "10px" }}>Reset</button>
                                    {
                                        !this.state.loginStatus ? <div style={{ textAlign: 'center' }}>Wrong Credentials</div> : <br />
                                    }
                                    <br></br>
                                    <p className="text-center">If not an existing user?</p>
                                    <center><a href="/user-registration">User Registration</a></center>
                                    <br></br>
                                    <center><a href="/admin-login">Admin Login</a></center>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserLoginComponent