import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../../redux/rockets/rocketsReducer';
import './RocketCard.css';

const RocketCard = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="rocketDiv">
      <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} className="rocketImage" />
      <div>
        <h3>{rocket.rocket_name}</h3>
        <p className={(rocket.reserved ? 'reserve' : '')}>
          {rocket.reserved && (<span className="reserveSpan">Reserved!</span>)}
          {rocket.description}
        </p>
        <button
          type="button"
          onClick={() => dispatch(reserveRocket(rocket.id))}
          className={(rocket.reserved ? 'reserveBtn' : 'rocketBtn')}
        >
          {(rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket')}
        </button>
      </div>
    </div>
  );
};

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketCard;
