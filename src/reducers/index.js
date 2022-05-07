import { combineReducers } from "redux";
import songListReducer from "./songListReducer";
import selectSongReducer from "./selectSongReducer";


const allReducers = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});

export default allReducers;
