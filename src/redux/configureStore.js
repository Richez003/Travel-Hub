import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missionsReducer';
import rocketReducer from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
