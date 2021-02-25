import React from 'react'
import {connect} from 'react-redux'



const SongDetail = ({song}) => {
    if(!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Detail for:</h3>
            <p>
          Title: {song.title}
          <br/>
          Duration: {song.duraction}
           </p>
        </div>
    )
}

const mapStateToProps = (state) => {
   return {song: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail)
