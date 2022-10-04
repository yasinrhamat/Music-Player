/**
 * @author Yasin Rhamatzada
 */
import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    // Double click event to edit modal
    handleClick = (event) => {
        if (event.detail === 2) { // if double click
            // go to PlatListCards.js 
            this.props.editCallback(this.getItemNum() - 1);
        }
    }

    handleRemoveSongClick = (event) => {
        // pass in the index of the song to remove
        this.props.removeCallback(this.getItemNum() - 1);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    render() {
        const { song } = this.props;
        let link = "https://www.youtube.com/watch?v=" + song.youtubeid;
        //console.log({song});
        // if (!song){
        //     return null;
        // }
        
        let num = this.getItemNum();
        //console.log("num: " + num);
        let itemClass = "playlister-song";
        if (this.state.draggedTo) {
            itemClass = "playlister-song-dragged-to";
        }
    
        //console.log(song);
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                draggable="true"
                onDoubleClick={this.handleClick}
            >
                {num}. <a href={link}> {song.title} by {song.artist}</a>

                <input
                type="button"
                className="list-song-button"
                id={"delete-song-" + num}
                value="X"
                onClick={this.handleRemoveSongClick}
                />
            </div>
        )
    }
}
//{song.title} by {song.artist} {song.youTubeId}
//{num}. <a href={link}> {song.title} by {song.artist}</a>
// ignore event or give a tag an id number or something