import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * RemoveSong_Transaction
 * 
 * This class represents a transaction that works with removing a song. 
 * It will be managed by the transaction stack.
 * 
 * @author Yasin Rhamatzada
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initRemovedSong, initRemovedSongIndex) {
        super();
        this.app = initApp;
        this.initRemovedSong = initRemovedSong;
        this.initRemovedSongIndex = initRemovedSongIndex;
    }
    // do is redo
    doTransaction() {
        this.app.doRemoveSong(this.initRemovedSongIndex);
    }
    
    undoTransaction() {
        this.app.undoRemoveSong(this.initRemovedSong, this.initRemovedSongIndex);
    }
}