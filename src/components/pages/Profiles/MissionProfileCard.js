import React from 'react';
import PropTypes from 'prop-types';

const MissionProfileCard = ({ joinedMissions }) => (
  <table>
    <tbody>
      {
        joinedMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="missionprofile">{mission.mission_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

MissionProfileCard.propTypes = {
  joinedMissions: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default MissionProfileCard;
