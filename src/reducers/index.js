import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'No Scrub', duraction: '2:17'},
        {title: 'Macarena', duraction: '3:45'},
        {title: 'All Star', duraction: '1:17'},
        {title: 'I Went It That Way', duraction: '4:00'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})