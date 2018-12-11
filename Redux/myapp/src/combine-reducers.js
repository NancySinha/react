import { combineReducers } from "redux";
import UserReducers from './reducer-users';
import MovieReducers from './reducers-movies';
import  reducersUserclicked from "./Actions/reducers-userclicked";


const allReducers = combineReducers({
    users: UserReducers,
    movies: MovieReducers,
    clickeduser:reducersUserclicked

})

export default allReducers