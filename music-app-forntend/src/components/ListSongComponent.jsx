import React, { Component } from 'react'
import SongService from '../services/SongService'
import ReactPlayer from "react-player";

class ListSongComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: []
        }
        this.addSong = this.addSong.bind(this);
        this.editSong = this.editSong.bind(this);
        this.deleteSong = this.deleteSong.bind(this);
    }

    deleteSong(id) {
        SongService.deleteSong(id).then(res => {
            this.setState({ songs: this.state.songs.filter(song => song.songId !== id) });
        });
    }
    viewSong(id) {
        this.props.history.push(`/view-song/${id}`);
    }
    editSong(id) {
        this.props.history.push(`/add-song/${id}`);
    }

    componentDidMount() {
        SongService.getSongs().then((res) => {
            this.setState({ songs: res.data });
        });
    }

    addSong() {
        this.props.history.push('/add-song/_add');
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Songs List</h2>
                <br></br>
                <div className="col-lg-6">
                    <button className="btn btn-primary" onClick={this.addSong}> Add Song</button>
                </div>
                <div className="row">
                    {
                        this.state.songs.map(
                            (song) =>
                                <div key={song.songId} className="col-sm-3 mt-3" >

                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5>{song.songTitle}</h5>
                                            {song.singer}
                                            <br></br>
                                            {song.albumName}
                                            <br></br>
                                            <ReactPlayer style={{ alignItem: 'center' }} width="200px" height="150px" url={song.url} />
                                            <br></br>
                                            <button onClick={() => this.editSong(song.songId)} className="btn btn-info">Update </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteSong(song.songId)} className="btn btn-danger">Delete </button>
                                            {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewSong(song.songId)} className="btn btn-info">View </button>*/}
                                        </div>
                                    </div>

                                </div>
                        )
                    }
                </div>
                <br></br>
            </div>
        )
    }
}

export default ListSongComponent