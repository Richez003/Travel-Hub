import { useSelector } from 'react-redux';
import MissionCard from './MissionCard';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <div>
      <h2>MISSIONS</h2>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="status">Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <MissionCard key={mission.mission_id} mission={mission} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
