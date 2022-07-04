import { useSelector } from 'react-redux';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div>
      <h2>ROCKETS</h2>
      {
        rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))
      }
    </div>
  );
};

export default Rockets;
