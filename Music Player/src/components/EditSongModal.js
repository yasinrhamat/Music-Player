/**
 * @author Yasin Rhamatzada
 */
import React, { Component } from 'react';

export default class EditSongModal extends Component {

    confirmSongChange = () => {
        let newChangedSong = {
            title: document.getElementById("edit-song-title").value,
            artist: document.getElementById("edit-song-artist").value,
            youTubeId: document.getElementById("edit-song-youTubeId").value
        }

        this.props.editSongCallback(newChangedSong);
    }

    render() {
        const { listKeyPair, hideEditSongModalCallback } = this.props;
        let name = "";
        if (listKeyPair) {
            name = listKeyPair.name;
        }
        return (
        <div 
            className="modal" 
            id="edit-song-modal" 
            data-animation="slideInOutLeft">
            <div className="modal-root" id='edit-song-root'>
                <div className="modal-north">
                    Edit Song
                </div>
                <div className="modal-center-content">
                    Title: 
                    <input 
                        type="text" 
                        id="edit-song-title" 
                        className="modal-textfield" />
                </div>
                <div className="modal-center-content">
                    Artist: 
                    <input 
                        type="text" 
                        id="edit-song-artist" 
                        className="modal-textfield" />
                </div>
                <div className="modal-center-content">
                    YouTubeID:  
                    <input 
                        type="text" 
                        id="edit-song-youTubeId" 
                        className="modal-textfield" />
                </div>
                <div className="modal-south">
                    <input 
                        type="button" 
                        id="edit-song-confirm-button" 
                        className="modal-button" 
                        onClick={this.confirmSongChange}
                        value='Confirm' />
                    <input 
                        type="button" 
                        id="edit-song-cancel-button" 
                        className="modal-button" 
                        onClick={hideEditSongModalCallback}
                        value='Cancel' />
                </div>
            </div>
        </div>
        );
    }
}