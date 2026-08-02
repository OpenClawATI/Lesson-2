import { useEffect, useState } from 'react';
import { getApiUrl, resolveCollection } from '../utils/api';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(getApiUrl('teams'));
        if (!response.ok) {
          throw new Error('Failed to load teams');
        }
        const data = await response.json();
        setTeams(resolveCollection(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  if (loading) return <p>Loading teams...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Teams</h2>
        <ul className="list-group list-group-flush">
          {teams.map((team) => (
            <li className="list-group-item" key={team._id || team.id || team.name}>
              <strong>{team.name}</strong>
              <div className="small text-muted">Sport: {team.sport}</div>
              <div className="small text-muted">Members: {team.members?.length ?? 0}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Teams;
