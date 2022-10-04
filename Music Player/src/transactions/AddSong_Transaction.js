import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with adding a song. 
 * It will be managed by the transaction stack.
 * 
 * @author Yasin Rhamatzada
 */
 export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initAddedSongIndex) { 
        super();
        this.app = initApp;
        this.initAddedSongIndex = initAddedSongIndex;
    }
    // do is redo
    doTransaction() {
        this.app.doAddSong();
    }
    
    undoTransaction() {
        this.app.undoAddSong(this.initAddedSongIndex);
    }
}