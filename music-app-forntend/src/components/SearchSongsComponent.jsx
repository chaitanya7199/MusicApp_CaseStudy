import React, { Component } from 'react'
import SongService from '../services/SongService';
import DisplaySongsComponent from './DisplaySongsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./css/SearchSongComponent.css";
import "./css/Display.css";
import Sidebar from './Sidebar';

class SearchSongsComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            songs: [],
            userId: JSON.parse(localStorage.getItem("users")).userId,
            readyFlag: false
        }

        this.goToUserWishlist = this.goToUserWishlist.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.logout = this.logout.bind(this);
    }

    async componentDidMount() {
        //status.isPlaying = false
        var _songs = []
        var song = {}
        await SongService.getSongs().then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                song = res.data[i]
                song.isPlaying = false
                song.songIndex = i
                _songs.push(song)
            }
            console.log(_songs)
            this.setState({ songs: _songs, readyFlag: true });
        });
    }

    goToHome() {
        this.props.history.push(`/search-songs/${this.state.userId}`)
    }

    goToUserWishlist() {
        this.props.history.push(`/user-wishlist/${this.state.userId}`)
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

    render() {
        return (
            <div className="display__component">
                <Sidebar
                    goToHome={this.goToHome}
                    goToUserWishlist={this.goToUserWishlist}
                    logout={this.logout} />
                <div className="search__song__component">
                    {
                        this.state.readyFlag ? (<DisplaySongsComponent songs={this.state.songs}
                            userId={this.state.userId}
                            goToWishlist={this.goToUserWishlist}
                        />) : (<div></div>)
                    }
                </div>

            </div >
        )
    }
}

export default SearchSongsComponent
