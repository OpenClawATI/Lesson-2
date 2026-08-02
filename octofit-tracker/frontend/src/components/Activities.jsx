import { useEffect, useState } from 'react';
import { getApiUrlFromCurrentOrigin, resolveCollection } from '../utils/api';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch(getApiUrlFromCurrentOrigin('activities'));
        if (!response.ok) {
          throw new Error('Failed to load activities');
        }
        const data = await response.json();
        setActivities(resolveCollection(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  if (loading) return <p>Loading activities...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Activities</h2>
        <ul className="list-group list-group-flush">
          {activities.map((activity) => (
            <li className="list-group-item" key={activity._id || activity.id || activity.date}>
              <strong>{activity.type}</strong>
              <div className="small text-muted">
                {activity.durationMinutes} min • {new Date(activity.date).toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Activities;
