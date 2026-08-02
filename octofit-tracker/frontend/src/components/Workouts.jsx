import { useEffect, useState } from 'react';
import { getApiUrlFromCurrentOrigin, resolveCollection } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(getApiUrlFromCurrentOrigin('workouts'));
        if (!response.ok) {
          throw new Error('Failed to load workouts');
        }
        const data = await response.json();
        setWorkouts(resolveCollection(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  if (loading) return <p>Loading workouts...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Workouts</h2>
        <ul className="list-group list-group-flush">
          {workouts.map((workout) => (
            <li className="list-group-item" key={workout._id || workout.id || workout.name}>
              <strong>{workout.name}</strong>
              <div className="small text-muted">{workout.category} • {workout.difficulty} • {workout.durationMinutes} min</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Workouts;
