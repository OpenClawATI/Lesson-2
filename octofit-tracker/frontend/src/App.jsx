import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="col-md-8 fs-4">
            A modern multi-tier fitness platform for tracking activities, building teams,
            and competing on a live leaderboard.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Explore the app
          </button>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Activities</h2>
              <p className="card-text">Log workouts and monitor your progress over time.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Teams</h2>
              <p className="card-text">Create or join teams and stay motivated together.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h5">Leaderboard</h2>
              <p className="card-text">Compete with others and climb the rankings.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
