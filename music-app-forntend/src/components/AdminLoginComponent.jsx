import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class AdminLoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            adminId: '',
            adminPassword: ''
        }
        this.changeAdminIdHandler = this.changeAdminIdHandler.bind(this);
        this.changeAdminPasswordHandler = this.changeAdminPasswordHandler.bind(this);
        this.loginAdmin = this.loginAdmin.bind(this);
    }

    loginAdmin = (e) => {
        e.preventDefault();
        let admin = { adminId: this.state.adminId, adminPassword: this.state.adminPassword };
        console.log('admin => ' + JSON.stringify(admin));

        AdminService.checkDetails(admin).then(res => {
            if (res.data === "Access Granted") {
                console.log(res.data)
                this.props.history.push('/songs')
            }
            else {
                console.log(res.data)
                this.props.history.push('/admin-login')
            }
        })
    }

    changeAdminIdHandler = (event) => {
        this.setState({ adminId: event.target.value });
    }

    changeAdminPasswordHandler = (event) => {
        this.setState({ adminPassword: event.target.value });
    }

    reset() {
        this.props.history.push('/admin-login');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 text-white bg-dark mb-3">
                            <h3 className="text-center">Admin Login</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Admin Id: </label>
                                        <input placeholder="Enter Admin Id" name="adminId" className="form-control"
                                            value={this.state.adminId} onChange={this.changeAdminIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Admin Password: </label>
                                        <input placeholder="Enter Admin Password" type="password" name="adminPassword" className="form-control"
                                            value={this.state.adminPassword} onChange={this.changeAdminPasswordHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.loginAdmin}>Login</button>
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

export default AdminLoginComponent
