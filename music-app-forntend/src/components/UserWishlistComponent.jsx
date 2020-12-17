import React, { Component } from 'react'
import UserWishlistService from '../services/UserWishlistService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faAngleLeft, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import "./css/Display.css";
import "./css/WishlistSongComponent.css";
import Sidebar from './Sidebar';
import ReactPlayer from "react-player";

class UserWishlistComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: [],
            userId: JSON.parse(localStorage.getItem("users")).userId
        }
        this.removeSongFromWishlist = this.removeSongFromWishlist.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToUserWishlist = this.goToUserWishlist.bind(this);
        this.logout = this.logout.bind(this);
    }

    removeSongFromWishlist(id) {
        console.log("song is removed")
        let wishlist = { userId: this.state.userId, songId: id }
        UserWishlistService.removeSongFromWishlist(wishlist).then(res => {
            this.setState({ songs: this.state.songs.filter(song => song.songId !== id) });
        });
        //this.props.history.push(`/view-song/${id}`);
    }

    goToHome() {
        this.props.history.push(`/search-songs/${this.state.userId}`)
    }

    goToUserWishlist() {
        this.props.history.push(`/user-wishlist/${this.state.userId}`)
    }

    goBack() {
        console.log(this.state.userId)
        this.props.history.push(`/search-songs/${this.state.userId}`)
    }

    logout() {
        var r = window.confirm("Are you sure, you want to logout!");
        if (r == true) {
            localStorage.removeItem("users")
            this.props.history.push("/")
        } else {
            this.props.history.push(`/search-songs/${this.state.userId}`)
        }
    }

    componentDidMount() {
        console.log(this.state.userId)
        UserWishlistService.displayAllSongsFromWishlist(this.state.userId).then((res) => {
            console.log(res.data)
            this.setState({ songs: res.data });
            console.log(this.state.songs[0].songId)
        });
    }

    render() {
        return (
            <div className="display__component">
                <Sidebar
                    goToHome={this.goToHome}
                    goToUserWishlist={this.goToUserWishlist}
                    logout={this.logout} />
                <div className="wishlist__song__component">
                    <button onClick={() => this.goToHome()} className="btn btn-secondary"><FontAwesomeIcon icon={faAngleLeft} />&nbsp;back</button>
                    <br></br>
                    <br></br>
                    <div style={{ "marginBottom": "4em" }} className="row">
                        {
                            this.state.songs.map(
                                (song) =>
                                    <div key={song.songId} className="col-sm-3 mt-3">

                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5>{song.songTitle}</h5>
                                                {song.singer}
                                                <br></br>
                                                {song.albumName}
                                                <br></br>
                                                <ReactPlayer style={{ alignItem: 'center' }} width="210px" height="150px" url={song.url} />
                                                <br></br>
                                                <button onClick={() => this.removeSongFromWishlist(song.songId)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} />&nbsp;Remove</button>
                                            </div>
                                        </div>

                                    </div>
                            )
                        }
                    </div>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default UserWishlistComponent