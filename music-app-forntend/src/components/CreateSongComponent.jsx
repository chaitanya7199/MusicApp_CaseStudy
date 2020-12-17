
import React, { Component } from 'react'
import SongService from '../services/SongService';

class CreateSongComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            songStatus: this.props.match.params.id,
            songId: '',
            songTitle: '',
            singer: '',
            albumName: '',
            url: ''
        }
        this.changeSongIdHandler = this.changeSongIdHandler.bind(this);
        this.changeSongTitleHandler = this.changeSongTitleHandler.bind(this);
        this.changeSingerHandler = this.changeSingerHandler.bind(this);
        this.changeAlbumHandler = this.changeAlbumHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this);
        this.saveOrUpdateSong = this.saveOrUpdateSong.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.songStatus === '_add') {
            console.log("add")
            return
        } else {
            SongService.getSongById(this.state.songStatus).then((res) => {
                let song = res.data;
                this.setState({
                    songId: song.songId,
                    songTitle: song.songTitle,
                    singer: song.singer,
                    albumName: song.albumName,
                    url: song.url
                });
            });
        }
    }
    saveOrUpdateSong = (e) => {
        e.preventDefault();
        let song = { songId: this.state.songId, songTitle: this.state.songTitle, singer: this.state.singer, albumName: this.state.albumName, url: this.state.url };
        console.log('song => ' + JSON.stringify(song));

        // step 5
        if (this.state.songStatus === '_add') {
            SongService.createSong(song).then(res => {
                this.props.history.push('/songs');
            });
        } else {
            SongService.updateSong(song, this.state.songStatus).then(res => {
                this.props.history.push('/songs');
            });
        }
    }

    changeSongIdHandler = (event) => {
        this.setState({ songId: event.target.value });
    }

    changeSongTitleHandler = (event) => {
        this.setState({ songTitle: event.target.value });
    }

    changeSingerHandler = (event) => {
        this.setState({ singer: event.target.value });
    }

    changeAlbumHandler = (event) => {
        this.setState({ albumName: event.target.value });
    }

    changeUrlHandler = (event) => {
        this.setState({ url: event.target.value });
    }

    cancel() {
        this.props.history.push('/songs');
    }

    getTitle() {
        if (this.state.songStatus === '_add') {
            return <h3 className="text-center">Add Song</h3>
        } else {
            return <h3 className="text-center">Update Song</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row m-1">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Song Id: </label>
                                        <input placeholder="Song Id" name="songId" className="form-control"
                                            value={this.state.songId} onChange={this.changeSongIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Song Title: </label>
                                        <input placeholder="Song Title" name="songTitle" className="form-control"
                                            value={this.state.songTitle} onChange={this.changeSongTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Singer: </label>
                                        <input placeholder="Singer" name="singer" className="form-control"
                                            value={this.state.singer} onChange={this.changeSingerHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Album: </label>
                                        <input placeholder="Album" name="album" className="form-control"
                                            value={this.state.albumName} onChange={this.changeAlbumHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> url: </label>
                                        <input placeholder="url" name="url" className="form-control"
                                            value={this.state.url} onChange={this.changeUrlHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateSong}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateSongComponent