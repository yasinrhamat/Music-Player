import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that works with editing a song. 
 * It will be managed by the transaction stack.
 * 
 * @author Yasin Rhamatzada
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initNewSong, initOldSong, initOldSongIndex) {
        super();
        this.app = initApp;
        this.initNewSong = initNewSong;
        this.initOldSong = initOldSong;
        this.initOldSongIndex = initOldSongIndex;
    }
    // do is redo
    doTransaction() {
        this.app.editSongParams(this.initNewSong, this.initOldSongIndex);
    }
    
    undoTransaction() {
        this.app.editSongParams(this.initOldSong, this.initOldSongIndex);
    }
}