import React, { Component } from 'react'
import SongService from '../services/SongService'

class ViewSongComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songId: this.props.match.params.id,
            song: {}
        }
    }

    componentDidMount(){
        SongService.getSongById(this.state.songId).then( res => {
            this.setState({song: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Song Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Song Title: </label>
                            <div> { this.state.song.songTitle }</div>
                        </div>
                        <div className = "row">
                            <label> Singer: </label>
                            <div> { this.state.song.singer }</div>
                        </div>
                        <div className = "row">
                            <label> Album: </label>
                            <div> { this.state.song.albumName }</div>
                        </div>
                        <div className = "row">
                            <label> Url: </label>
                            <div> { this.state.song.url }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewSongComponent