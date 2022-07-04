import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../../redux/missions/missionsReducer';
import './MissionCard.css';

const MissionCard = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr className={(mission.reserved ? 'memberRow' : '')}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td className={(mission.reserved ? 'member' : '')}>
        {(mission.reserved ? <span className="active">Active Member</span> : <span className="notActive">Not A Member</span>)}
      </td>
      <td>
        <button
          type="button"
          onClick={() => dispatch(joinMission(mission.mission_id))}
          className={(mission.reserved ? 'reserved' : 'joinMission')}
        >
          {(mission.reserved ? 'Leave Mission' : 'Join Mission')}
        </button>
      </td>
    </tr>
  );
};

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    mission_id: PropTypes.string,
    reserved: PropTypes.bool,
    description: PropTypes.string,
  }).isRequired,
};

export default MissionCard;
