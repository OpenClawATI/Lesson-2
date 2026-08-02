import { useEffect, useState } from 'react';
import { getApiUrl, resolveCollection } from '../utils/api';

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(getApiUrl('leaderboard'));
        if (!response.ok) {
          throw new Error('Failed to load leaderboard');
        }
        const data = await response.json();
        setEntries(resolveCollection(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="h4">Leaderboard</h2>
        <ul className="list-group list-group-flush">
          {entries.map((entry) => (
            <li className="list-group-item" key={entry._id || entry.id || entry.rank}>
              <strong>#{entry.rank}</strong> {entry.userId?.name || 'Unknown'} — {entry.points} pts
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leaderboard;
