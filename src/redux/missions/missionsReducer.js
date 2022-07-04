import axios from 'axios';

const GET_MISSIONS = 'space-travelers/redux/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers/redux/JOIN_MISSION';
const API = 'https://api.spacexdata.com/v3/missions';

const getMissions = (payload) => ({ type: GET_MISSIONS, payload });
export const joinMission = (id) => ({ type: JOIN_MISSION, id });

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(API);
  const data = await response.data;
  const missionList = [];

  data.forEach((mission) => {
    missionList.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch(getMissions(missionList));
};

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS: {
      return action.payload;
    }
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionReducer;
