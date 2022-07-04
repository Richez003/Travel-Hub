import React from 'react';
import PropTypes from 'prop-types';

const RocketProfileCard = ({ reservedRockets }) => (
  <table>
    <tbody>
      {
        reservedRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td className="rocketProfile">{rocket.rocket_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

RocketProfileCard.propTypes = {
  reservedRockets: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default RocketProfileCard;
