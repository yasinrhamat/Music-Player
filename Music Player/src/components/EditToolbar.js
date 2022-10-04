/**
 * @author Yasin Rhamatzada
 */
import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, undoCallback, 
            redoCallback, closeCallback, addCallback, addButtonDisable, 
            undoButtonDisable, redoButtonDisable, closeButtonDisable} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";
        if (canAddSong) addSongClass += " disabled";
        if (canUndo) undoClass += " disabled";
        if (canRedo) redoClass += " disabled";
        if (canClose) closeClass += " disabled";
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={addCallback}
                disabled={addButtonDisable}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
                disabled={undoButtonDisable}            
                />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
                disabled={redoButtonDisable}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
                disabled={closeButtonDisable}
            />
        </div>
        )
    }
}