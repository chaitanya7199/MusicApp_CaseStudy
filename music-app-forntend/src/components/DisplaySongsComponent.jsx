import React, { Component } from 'react'
import UserWishlistService from '../services/UserWishlistService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Route } from "react-router-dom";
import UserWishlistComponent from './UserWishlistComponent';
import Footer from './Footer';
import HeaderComponent from './HeaderComponent';
import ReactPlayer from "react-player";

class DisplaySongsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: this.props.songs,
            //songs: [],
            userId: JSON.parse(localStorage.getItem("users")).userId,
            userName: JSON.parse(localStorage.getItem("users")).userName,
            buttonStatus: false,
            renderPlayer: false,
            currentSongIndex: 0,
            nextSongIndex: 1,
            searchItem: '',
            currentPlaySong: {}
        }
        this.addSongToWishlist = this.addSongToWishlist.bind(this);
        this.editSearchItem = this.editSearchItem.bind(this);
    }

    componentDidMount() {
        console.log(this.state.songs)
        console.log(this.props.songs)
    }

    addSongToWishlist(songId) {
        console.log(this.state.userId)
        let wishlist = { userId: this.state.userId, songId: songId }
        console.log(wishlist.userId)
        console.log("added to wishlist")

        UserWishlistService.addSongToWishlist(wishlist).then(res => {
            console.log(res.data);
            this.props.goToWishlist()
            //this.props.history.push(`/user-wishlist/${wishlist.userId}`);
        });
    }

    editSearchItem = (e) => {
        var searchedSongs = []
        searchedSongs = this.state.songs.filter(song => (song.songTitle.toLowerCase().includes(this.state.searchItem.toLowerCase())))
        console.log(this.state.searchItem)
        this.setState({ searchItem: e.target.value, songs: searchedSongs })
        if (this.state.searchItem == '') {
            this.setState({ songs: this.props.songs })
        }
    }


    render() {
        return (
            <div className="container">
                <div>
                    <h2 style={{ color: 'white' }}>Welcome, {this.state.userName}</h2>
                    <br></br>
                    <form className="form-inline d-flex justify-content md-form form-sm active-cyan active-cyan-2 mt-2">
                        <input className="form-control form-control-sm ml-2 w-100" type="text" placeholder="Search by song title..." value={this.state.searchItem}
                            onChange={this.editSearchItem} aria-label="Search" />
                    </form>
                    <br></br>
                    <br></br>
                    <div style={{ "marginBottom": "4em" }} className="row">
                        {
                            this.state.songs.map(
                                (song) =>
                                    <div key={song.songId} className="col-sm-3 mt-3">

                                        <div className="card h-100 text-white bg-secondary mb-3">
                                            <div className="card-body">
                                                <h5>{song.songTitle}</h5>
                                                {song.singer}
                                                <br></br>
                                                {song.albumName}
                                                <br></br>
                                                <ReactPlayer style={{ alignItem: 'center' }} width="210px" height="150px" url={song.url} />
                                                <br></br>
                                                <button onClick={() => this.addSongToWishlist(song.songId)} className="btn btn-info"><FontAwesomeIcon icon={faHeart} />&nbsp;Wishlist</button>
                                            </div>
                                        </div>

                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplaySongsComponent